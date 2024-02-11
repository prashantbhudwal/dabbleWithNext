const getLength = function <T>(arg: T): number {
  let length = 0;
  // length = arg.length   // This will fail

  if (typeof arg === "string" || Array.isArray(arg)) {
    length = arg.length;
  }
  return length;
};

export default async function Generics() {
  // All functions that are named as _functionName, are without generics

  //-------- the response is typed but can only echo numbers
  const _echoNumber = function (arg: number): number {
    return arg;
  };
  const myNumber = _echoNumber(12);

  //-------- the response is typed but can only echo string
  const _echoString = function (arg: string): string {
    return arg;
  };
  const myString = _echoString("String");

  //-------- can echo both numbers and strings but the response is not typed
  const _echo = function (arg: any): any {
    return arg;
  };
  const myArray = _echo([1, 2, 3]);

  // Rendering this below will give a runtime error but no compile time warnings or errors
  // Also no object methods
  const myObject = _echo({ test: "test string" });
  console.log(myObject);

  // Will give a compile time error if you try rendering directly
  const echo = function <T>(arg: T): T {
    return arg;
  };
  const typedObject = echo({ test: "test string" });

  // you can also explicitly pass the type argument to the generic function
  const typedArray = echo<Array<number>>([1, 2, 3]);

  const getArrayLength = function <T>(arg: T[]) {
    return arg.length;
  };

  const length = getArrayLength(typedArray); //will return typed value
  console.log(length);

  const _getValueAtIndex = function (array: Array<any>, index: number) {
    return array[index];
  };
  const _valueAtTwo = _getValueAtIndex(typedArray, 2); // will return untyped value
  console.log(_valueAtTwo);

  // since the function is a generic function, the value received will be typed
  const getValueAtIndex = function <T>(array: T[], index: number): T {
    return array[index];
  };
  const valueAtTwo = getValueAtIndex(typedArray, 2); // will return typed value
  console.log(valueAtTwo);

  const combine = function <T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
  };

  //combine works perfectly when both the arrays are of same type
  const combinedArray = combine([1, 2, 3], [2, 3]);
  console.log(combinedArray);

  // but it will fail when working with multi type array if not explicitly typed
  const combinedMultiTypeArray = combine<string | number>(combinedArray, [
    "1",
    "2",
  ]);
  console.log(combinedMultiTypeArray);

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
