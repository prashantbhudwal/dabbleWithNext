"use client";
import { useAtom } from "jotai";
import Button from "../Components/Button";
import { testAtom } from "../state/app-state";

//random number generator
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100000));
}

export default function Page() {
  const [testValue, setTestValue] = useAtom(testAtom);
  const [anotherTestValue, setAnotherTestValue] = useAtom(testAtom);
  return (
    <>
      <div>
        <h1>Value : {testValue}</h1>
        <Button
          onClick={() => setTestValue(`Updated the text ${getRandomInt()}`)}
        >
          Change Default Value
        </Button>
      </div>
      <div>
        <h1>Copy of Value : {anotherTestValue}</h1>
        <Button
          onClick={() =>
            setAnotherTestValue(`Updated the text ${getRandomInt()}`)
          }
        >
          Change Default Value
        </Button>
      </div>
    </>
  );
}
