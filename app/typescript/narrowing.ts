// Problem

// const coerceAmount = (amount: number | { amount: number }) => {
//   // Write something here so that both tests work.
// };

// const test = coerceAmount({ amount: 20 });
// console.log(test);

// const test2 = coerceAmount(20);
// console.log(test2);

// Solution
type Amount =
  | number
  | {
      amount: number;
    };
const coerceAmount = (amount: Amount) => {
  if (typeof amount === "number") return amount;
  const amountToBeReturned = amount.amount;
  return amountToBeReturned;
};

const test = coerceAmount({ amount: 20 });
console.log(test);

const test2 = coerceAmount(20);
console.log(test2);
