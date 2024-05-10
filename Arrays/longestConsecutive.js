function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      // Check if num is the start of a sequence
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        // Check if next consecutive number exists
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
console.log("Longest consecutive sequence length:", longestConsecutive(nums)); // Output: 4 (corresponding to [1, 2, 3, 4])
