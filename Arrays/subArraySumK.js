function longestSubarrayWithSumK(nums, k) {
  const map = new Map();
  let maxLen = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLen = i + 1; // Update max length if sum equals k from the beginning
    } else if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLen;
}

// Example usage:
const nums = [1, -1, 5, -2, 3];
const k = 3;
console.log("Longest subarray with sum K:", longestSubarrayWithSumK(nums, k)); // Output: 4 (corresponding to [1, -1, 5, -2])
