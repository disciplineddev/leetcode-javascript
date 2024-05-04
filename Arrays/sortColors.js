const sortColors = (nums) => {
  let low = 0;
  let high = nums.length - 1;
  let i = 0;
  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    }
  }
  return nums;
};

// Example usage:
const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]
