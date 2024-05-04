function thirdLargest(arr) {
  if (arr.length < 3) {
    return "Array should have at least 3 elements";
  }

  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third && arr[i] !== second && arr[i] !== first) {
      third = arr[i];
    }
  }

  return third === Number.MIN_SAFE_INTEGER
    ? "Third largest doesn't exist"
    : third;
}

// Example usage:
const array = [1, 5, 2, 9, 8, 7];
console.log(thirdLargest(array)); // Output: 7
