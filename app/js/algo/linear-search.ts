export default function linearSearch<T>(array: T[], searchItem: T) {
  for (let item = 0; item < array.length; item++) {
    if (array[item] === searchItem) return true;
  }
  return false;
}

export function run() {
  const searchResult = linearSearch([1, 2, 3, 4], 5);
  console.log(searchResult);
}
