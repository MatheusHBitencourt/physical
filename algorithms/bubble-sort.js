// Create an array of numbers from 1 to 10
const numbers = Array.from({length: 100}, (_, i) => i + 1);

// Shuffle the array using a clever method
const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);

console.log("shuffle", shuffledNumbers);

(function bubbleSort(arr) {
  let counter = 0;
  let index = 0;
  let indexHolder = 0;
  const totalCount = arr.length - 1;

  while (counter < totalCount) {
    if (index >= totalCount) {
      index = 0;
    }

    // console.log("doing", arr, "points", index,index + 1);

    const isGreaterThan = arr[index] > arr[index + 1];

    if (isGreaterThan) {
      indexHolder = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = indexHolder;
      counter = 0;
    } else {
      counter += 1;
    }

    index++;
  }

  console.log("final", arr);
})(shuffledNumbers);
