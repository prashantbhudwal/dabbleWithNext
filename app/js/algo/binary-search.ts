/**
 * In plain english
 * Binary search works by dividing and then conquering. We split the array in half, then see if the half is the value we need. We then do it recursively till we either reach a point where midpoint === value, in which case the value is found, or else it is not found.
 *
 * 1. By definition, binary search only works on sorted arrays, so we first sort the array.
 * Ideally sorting should happen outside this function.
 *
 * 2. We define the high and a low point. These are the boundaries of the search. These will be used as indices while searching.
 *
 * 3.We then define an operation we need to do, and perform it till the exist condition is met. Which in this case is when high > low, that is you have exhausted all theoretical possibilities. You can think of these as two cars driving towards each other. Once they meet, there is nowhere left to go, the whole path is traversed.
 *
 * 4.The operation is as follows
 *  - find the midpoint
 *  - find the value at the midpoint
 *  - check if this value is equal to the search item
 *  - if yes --> the search is successful, the value is present in the array
 *  - if no
 *      - if value > search item
 *          - high = mid --> the car moving left moves to the center
 *      - if value < search item
 *          - low = mid + 1 --> the car moving right moves to the center + 1, because center was already checked
 *
 */

function binarySearch<T extends number>(array: T[], searchItem: T) {
  const sortedArray = array.sort((a, b) => a - b);
  let low = 0;
  let high = sortedArray.length;
  do {
    const midpoint = Math.floor(low + (high - low) / 2);
    const value = sortedArray[midpoint];
    if (value === searchItem) {
      return true;
    } else if (value > searchItem) {
      high = midpoint;
    } else if (value < searchItem) {
      low = midpoint + 1;
    }
  } while (low < high);
  return false;
}

// Refactored binary search
const getSortedArray = <T extends number>(array: T[]) =>
  array.sort((a, b) => a - b);

const getMidpoint = <T extends number>(min: T, max: T) =>
  Math.floor(min + (max - min) / 2);

function binarySearchFunctional<T extends number>(array: T[], searchItem: T) {
  const sortedArray = getSortedArray(array);
  let low = 0;
  let high = array.length;
  do {
    const midpoint = getMidpoint(low, high);
    const valueAtMidpoint = sortedArray[midpoint];
    if (valueAtMidpoint === searchItem) return true;
    else if (valueAtMidpoint > searchItem) high = midpoint;
    else if (valueAtMidpoint < searchItem) low = midpoint + 1;
  } while (low < high);
  return false;
}

export function run() {
  const searchResult = binarySearch([1, 2, 3, 4], 1);
  console.log(searchResult);
}
