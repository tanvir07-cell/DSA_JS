function bubbleSort(arr) {
  let sorted = false,
    counter = 0;
  while (!sorted) {
    sorted = true;

    // i<arr.length-1 deoaar means hocceh je ami jodi i<arr.length ditam tahole ekdom ses position e giye kon updan er sathe compare korto tokhon indexError dito:
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        sorted = false;
      }
    }

    // Here counter means hocceh je koto ti boro upadan right e jabe mane e right most array the jabe

    counter++;
  }
  console.log("counter ", counter);
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5]));
