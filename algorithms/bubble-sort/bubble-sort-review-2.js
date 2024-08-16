// Bubble sort review 1 / 28min

// Shuffle the array using a clever method
const numbers = Array.from({length: 100}, (_, i) => i + 1);

// Sort Random
const randomList = numbers.sort(() => Math.random() - 0.5);

console.log("entra", randomList);

(function bubbleSort(list) {
  const size = list.length;
  const end = size - 1;

  let counter = 0;
  let index = 0;

  while (counter <= end) {
    if (index === end) {
      index = 0;
    }

    const isGreaterThan = list[index] > list[index + 1];

    if (isGreaterThan) {
      list.splice(index, 0, index + 1);
      list.splice(index + 2, 1);

      counter = 0;
    } else {
      counter++;
    }

    index++;
  }

  console.log("sai", list);
})(randomList);
