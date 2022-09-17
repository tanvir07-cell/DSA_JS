function insertionSort(arr, n) {
  // let first element of the index of the array is sorted. so,that's why loop start's from the second element of the array:
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];

    // get the first element  index which is sorted using j
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const arr = [-6, -10, 1, 100, -20],
  n = arr.length;
console.log(insertionSort(arr, n));
