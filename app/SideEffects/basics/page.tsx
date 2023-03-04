"use client";
import { useEffect, useState } from "react";

export default function Basics() {
  console.log("render");
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count} Test:${test}`;
  }, [count]);

  return (
    <div>
      <h1>Compare the values below with the title</h1>
      <p>Count: {count}</p>
      <p>Test:{test}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setTest(test + 1)}>Test</button>
    </div>
  );
}
