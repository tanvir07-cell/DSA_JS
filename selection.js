console.time();
function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.log(arr);
}

const arr = [1000, 500, 500, 100, 100, 50, 20, 5],
  n = arr.length;
selectionSort(arr, n);
console.timeEnd();
