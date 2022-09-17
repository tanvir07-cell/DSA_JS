function bubbleSort(arr, n) {
  // do-while loop use korar means hocceh je shudu ekbar loop iteration korlei hobe nah jotokkhon obdi amar swapping kora jabe totokkhon obdi loop iterate korte hobe
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // check adjacent elements is the array is greater or bigger:
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const arr = [-6, -10, 1, 100, -20],
  n = arr.length;
console.log(bubbleSort(arr, n));
