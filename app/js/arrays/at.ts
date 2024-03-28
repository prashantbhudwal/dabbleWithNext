const getLastElement = function <T>(array: T[]) {
  return array.at(-1);
};

const getSecondLastElement = function <T>(array: T[]) {
  return array.at(-2);
};

const isArrayEmpty = function <T>(array: T[]) {
  return array.at(0) === undefined;
};

export const at = function () {
  const array = [2, 3, 4, 5, 6, 7];

  console.log(array.at(1));

  const firstItem = array.at(0);

  const firstItemWithIndex = array[0];
  console.log(firstItemWithIndex);
  console.log(firstItem);

  const lastItem = array.at(-1);
  const lastItemWithIndex = array[-1]; // undefined
  const lastItemWithLength = array[array.length - 1];
  const lastItemWithSlice = array.slice(-1).pop(); // Returns array, hence pop is used
  console.log(lastItemWithSlice);
  console.log(lastItem, lastItemWithIndex, lastItemWithLength);

  const outOfRangeItem = array.at(-7);
  console.log(outOfRangeItem);

  const outOfRangeItemWithIndex = array[10];
  console.log(outOfRangeItemWithIndex);

  const testArrays = [[], [1, 2], [], [1]];

  const isEmpty = testArrays.map((arr) => isArrayEmpty(arr));
  console.log(isEmpty);

  const lastArray = getLastElement(testArrays);
  console.log(lastArray);

  const secondLastArray = getSecondLastElement(testArrays);
  console.log(secondLastArray);
};
