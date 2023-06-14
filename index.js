/*in JavaScript given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. */
function isSubsequence(arr1, arr2) {
  let i = 0; // Index for arr1
  let j = 0; // Index for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      j++; // Move to the next element in arr2
    }
    i++; // Move to the next element in arr1
  }

  return j === arr2.length;
}

/* It initializes two index variables, i for arr1 and j for arr2, both starting from 0.
It iterates through arr1 and arr2 simultaneously until either array is fully traversed or until we find a mismatched element.
If the elements at arr1[i] and arr2[j] match, we move to the next element in arr2 by incrementing j.
Regardless of a match or mismatch, we always move to the next element in arr1 by incrementing i.
If we reach the end of arr2 (i.e., j === arr2.length), it means all elements in arr2 were found as a subsequence in arr1, so we return true.
If we reach the end of arr1 (i.e., i === arr1.length) before reaching the end of arr2, it means not all elements in arr2 were found in arr1, so we return false.
Here's an example usage of the function:*/
