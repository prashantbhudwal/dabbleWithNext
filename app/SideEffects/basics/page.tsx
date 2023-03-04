"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  gap: 1em;
`;

export default function Basics() {
  console.log("first line of component");
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count} Test:${test}`;
    console.log("useEffect");
  }, [count]);
  console.log("line before return, after useEffect");
  return (
    <Container>
      <h2>Compare the values below with the title</h2>
      <h2>Keep the console open</h2>
      <p>Count: {count}</p>
      <p>Test:{test}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setTest(test + 1)}>Test</button>
    </Container>
  );
}
