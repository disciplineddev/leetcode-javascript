function findLeaders(arr) {
  const leaders = [];
  let maxRight = arr[arr.length - 1];

  // The last element is always a leader
  leaders.push(maxRight);

  // Iterate from second last element to the first
  for (let i = arr.length - 2; i >= 0; i--) {
    // If current element is greater than maxRight
    if (arr[i] > maxRight) {
      maxRight = arr[i];
      leaders.push(maxRight);
    }
  }

  return leaders.reverse(); // Reverse the leaders to maintain the original order
}

// Example usage:
const arr = [16, 17, 4, 3, 5, 2];
console.log("Leaders in the array:", findLeaders(arr)); // Output: [17, 5, 2]
