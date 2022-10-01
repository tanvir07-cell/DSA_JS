function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  //   base case when the arr is already sorting in length 1 && length 0;
  if (arr.length < 2) {
    return arr;
  }

  //   Merge the array two sides(left and right)
  let leftArr = arr.slice(0, mid),
    rightArr = arr.slice(mid);

  //  then recursively divide this array:
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex++]);
    } else {
      result.push(rightArr[rightIndex++]);
    }
  }
  let leftSortArr = leftArr.slice(leftIndex);
  let rightSortArr = rightArr.slice(rightIndex);

  return result.concat(leftSortArr).concat(rightSortArr);
}

console.log(mergeSort([20, 10, -100, 0, 3, 4]));
