// Problem 1

export const test = 1;
function findStringElement(array: string[], element: string): boolean {
  return array.includes(element);
}

function findNumberElement(array: number[], element: number): boolean {
  return array.includes(element);
}

// Refactoring Goal: Use generics to create a single function that can work with both strings and numbers.

export function findElement<T>(
  array: T[],
  element: T
): {
  element: T;
  isIncluded: boolean;
} {
  return { element: element, isIncluded: array.includes(element) };
}

const { element: firstElement, isIncluded } = findElement([1, 2, 3, 4, 5], 2);
console.log(typeof firstElement);
const { element: secondElement } = findElement(["1", "2"], "2");
console.log(typeof secondElement);

// Problem 2 -----------------------------------------------------
// Refactoring Goal: Use generics to fetch property values from objects regardless of the value type.

function getStringPropertyValue(
  obj: { [key: string]: string },
  key: string
): string {
  return obj[key];
}

function getNumberPropertyValue(
  obj: { [key: string]: number },
  key: string
): number {
  return obj[key];
}

const stringValue = getStringPropertyValue(
  { "1": "firstValue", "2": "secondValue" },
  "1"
);
console.log(stringValue, typeof stringValue);

const numberValue = getNumberPropertyValue({ "1": 1, "2": 2 }, "2");
console.log(numberValue, typeof numberValue);

// Solution
function getPropertyValue<T>(obj: { [key: string]: T }, key: string): T {
  return obj[key];
}

const numberValueWithGeneric = getPropertyValue({ "1": 1, "2": 2 }, "2");
const stringValueWithGeneric = getPropertyValue(
  { "1": "firstValue", "2": "secondValue" },
  "1"
);
console.log(stringValueWithGeneric, typeof stringValueWithGeneric);
console.log(numberValueWithGeneric, typeof numberValueWithGeneric);

//Problem 3 ------------------------------------------
// Refactoring Goal: Implement a generic function to process API responses,
// where the function automatically infers and validates the shape of the input and output.

interface UserResponse {
  id: number;
  username: string;
  email: string;
}

interface ProductResponse {
  productId: number;
  name: string;
  price: number;
}

function processUserResponse(response: UserResponse): UserResponse {
  // Process user response
  return response;
}

function processProductResponse(response: ProductResponse): ProductResponse {
  // Process product response
  return response;
}

function processResponse<T>(response: T): T {
  // Process product response
  return response;
}
