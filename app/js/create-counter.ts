export function createCounter() {
  let count = 0; // Private variable

  return {
    increment: () => {
      count++; // Access to the private `count` variable
      console.log(`Count: ${count}`);
    },
    decrement: () => {
      count--; // Access to the private `count` variable
      console.log(`Count: ${count}`);
    },
    reset: () => {
      count = 0; // Access to the private `count` variable
      console.log(`Count reset to ${count}`);
    },
    count,
  };
}
