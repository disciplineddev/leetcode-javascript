function fourSum(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 3; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      // Avoid duplicates
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j === i + 1 || (j > i + 1 && nums[j] !== nums[j - 1])) {
          // Avoid duplicates
          let low = j + 1;
          let high = nums.length - 1;
          let sum = target - nums[i] - nums[j];

          while (low < high) {
            if (nums[low] + nums[high] === sum) {
              result.push([nums[i], nums[j], nums[low], nums[high]]);
              while (low < high && nums[low] === nums[low + 1]) low++; // Skip same elements
              while (low < high && nums[high] === nums[high - 1]) high--; // Skip same elements
              low++;
              high--;
            } else if (nums[low] + nums[high] < sum) {
              low++;
            } else {
              high--;
            }
          }
        }
      }
    }
  }

  return result;
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target)); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
