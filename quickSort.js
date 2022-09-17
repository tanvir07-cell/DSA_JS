function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // set array's last element as a pivot;
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  //   repeating the process and concatening the array with leftArr,pivot,rightArr
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [-2, 100, 3, 500];
console.log(quickSort(arr));
