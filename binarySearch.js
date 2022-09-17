function binary_search(arr, left, right, item) {
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === item) {
      return `${item} is found at index ${mid}`;
    }
    if (arr[mid] > item) {
      return binary_search(arr, left, mid - 1, item);
    } else {
      return binary_search(arr, mid + 1, right, item);
    }
  }
  return `${item} is not here`;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12],
  item = 12,
  l = 0,
  r = arr.length - 1;
console.log(binary_search(arr, l, r, item));
