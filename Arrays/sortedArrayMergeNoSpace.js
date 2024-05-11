function mergeSortedArrays(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  let i = m - 1; // Index of last element in arr1
  let j = n - 1; // Index of last element in arr2
  let lastIndex = m + n - 1; // Index of last element in merged array

  // Merge arr1 and arr2, starting from the end
  while (j >= 0) {
    // If all elements in arr1 are merged or the current element in arr2 is greater
    if (i < 0 || arr2[j] >= arr1[i]) {
      arr1[lastIndex--] = arr2[j--];
    } else {
      // If all elements in arr2 are merged or the current element in arr1 is greater
      arr1[lastIndex--] = arr1[i--];
    }
  }

  return arr1;
}

// Example usage:
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
