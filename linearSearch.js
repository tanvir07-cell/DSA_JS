function linear_search(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchItem) return `${searchItem} found at index ${i}`;
  }
  return `${searchItem} is not in the array`;
}

let arr = [100, -12, 300, 4, 5],
  searchItem = -12;

console.log(linear_search(arr, searchItem));
