// Shuffle the array using a clever method
const numbers = Array.from({length: 100}, (_, i) => i + 1);

// Sort Random
const randomList = numbers.sort(() => Math.random() - 0.5);

console.log("entra \n", randomList);

(function selectionSort(list) {
  const size = list.length;

  let index = 0;

  while (index < size) {
    const lastIndex = size - index;

    const tempList = list.slice(0, lastIndex);

    const maxValue = Math.max(...tempList);

    const maxValueIndex = list.indexOf(maxValue);

    list.splice(lastIndex, 0, list[maxValueIndex]);

    list.splice(maxValueIndex, 1);

    console.log("reduz \n", tempList);

    index += 1;
  }

  console.log("sai \n", list);
})(randomList);
