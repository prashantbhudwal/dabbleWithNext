const _echoNumber = function (arg: number): number {
  return arg;
};

const _echoString = function (arg: string): string {
  return arg;
};

const _echo = function (arg: any): any {
  return arg;
};

const echo = function <T>(arg: T): T {
  return arg;
};

const getLength = function <T>(arg: T): number {
  let length = 0;
  // length = arg.length   // This will fail

  if (typeof arg === "string" || Array.isArray(arg)) {
    length = arg.length;
  }
  return length;
};

const getArrayLength = function <T>(arg: T[]) {
  return arg.length;
};

const _getValueAtIndex = function (array: Array<any>, index: number) {
  return array[index];
};
const getValueAtIndex = function <T>(array: T[], index: number): T {
  return array[index];
};

export default async function Generics() {
  // All functions that are named as _functionName, are without generics

  // the response is typed but can only echo numbers
  const myNumber = _echoNumber(12);

  // the response is typed but can only echo string
  const myString = _echoString("String");

  // can echo both numbers and strings but the response is not typed
  const myArray = _echo([1, 2, 3]);

  // Rendering this below will give a runtime error but no compile time warnings or errors
  // Also no object methods
  const myObject = _echo({ test: "test string" });
  console.log(myObject);

  // Will give a compile time error if you try rendering directly
  const typedObject = echo({ test: "test string" });

  // you can also explicitly pass the type argument to the generic function
  const typedArray = echo<Array<number>>([1, 2, 3]);

  const length = getArrayLength(typedArray); //will return typed value
  console.log(length);

  const _valueAtTwo = _getValueAtIndex(typedArray, 2); // will return untyped value
  console.log(_valueAtTwo);

  // since the function is a generic function, the value received will be typed
  const valueAtTwo = getValueAtIndex(typedArray, 2); // will return typed value
  console.log(valueAtTwo);

  return (
    <div className="space-y-5">
      <div>
        <span>Number:</span> {myNumber}
      </div>
      <div>
        <span>String</span>: {myString}
      </div>
      <div>
        {" "}
        <span>Boolean:</span> {myArray}
      </div>
      {/* <div> Object: {myObject}</div> */}
      <div>Typed Object: {JSON.stringify(typedObject)}</div>
      <div>Typed Array: {typedArray}</div>
    </div>
  );
}
