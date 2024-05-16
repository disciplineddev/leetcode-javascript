function threeSum(nums) {
  let result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      // Avoid duplicates
      let low = i + 1;
      let high = nums.length - 1;
      let sum = 0 - nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          result.push([nums[i], nums[low], nums[high]]);
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

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]
