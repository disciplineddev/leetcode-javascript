function twoSum(nums, target) {
    const map = {}; // Create a hashmap to store indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed
        
        // Check if the complement exists in the hashmap
        if (complement in map) {
            // Return the indices of the two numbers that add up to the target
            return [map[complement], i];
        }
        
        // If complement doesn't exist, store the current number's index in the hashmap
        map[nums[i]] = i;
    }
    
    // If no solution is found
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (indices of 2 and 7)
