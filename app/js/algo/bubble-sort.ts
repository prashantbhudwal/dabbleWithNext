function bubbleSort<T extends number>(array: T[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
      }
    }
  }
  return array;
}

export function run() {
  const searchResult = bubbleSort([2, 1, 3, 4]);
  console.log(searchResult);
}
