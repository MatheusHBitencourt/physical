const number = 9999;

const x = [];

for (let i = 0; i < 10000; i++) {
  x.push(i);
}

// console.log("x", x);

(function binarySearch(arr, value) {
  let start = 0,
    end = arr.length - 1;
  let counter = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
      console.log("value", mid, "counter binary", counter);

      return mid;
    }

    if (arr[mid] < value) {
      start = mid + 1;
      counter++;
    } else {
      end = mid - 1;
      counter++;
    }
  }

  return -1;
})(x, number);
