// Bubble sort review 1 / 57min

// Create an array of numbers from 1 to 10
const numbers = Array.from({length: 100}, (_, i) => i + 1);

// Shuffle the array using a clever method
const shuffleNumbers = numbers.sort(() => Math.random() - 0.5);

(function bubbleSort(shuffledNumbers) {
  const listSize = shuffledNumbers.length;
  const endList = listSize - 1;
  let counter = 0;
  const list = shuffledNumbers;

  for (let index = 0; counter <= listSize; index++) {
    if (index === endList) {
      index = 0;
    }

    const actualIndexValue = shuffledNumbers[index];

    const nextIndexValue = shuffledNumbers[index + 1];

    const isGreaterThan = actualIndexValue > nextIndexValue;

    if (isGreaterThan) {
      list.splice(index, 0, nextIndexValue);
      list.splice(index + 2, 1);
      counter = 0;
    } else {
      counter++;
    }
  }

  console.log(list);
})(shuffleNumbers);
