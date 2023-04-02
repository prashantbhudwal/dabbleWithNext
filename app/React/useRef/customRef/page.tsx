"use client";
import { useState, useRef } from "react";
function useCustomRef(initialValue?: any) {
  const [state, setState] = useState({ current: initialValue });
  return state;
}

export default function CustomRef() {
  const customRef = useCustomRef(0);
  const ref = useRef(0);
  const [state, setState] = useState(0);
  const [render, setRender] = useState(false);

  const renderNow = function () {
    setRender((prevRender) => !prevRender);
    console.log(ref.current);
  };

  const handleStateIncrement = function () {
    setState((prevState) => prevState + 1);
  };
  const handleRefIncrement = function () {
    ref.current += 1;
    customRef.current += 1;
    renderNow();
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        State Counter: {state}{" "}
        <button onClick={handleStateIncrement}> Increment</button>
      </div>
      <div>Ref Counter: {ref.current} </div>
      <div>
        Custom Ref Counter: {customRef.current}{" "}
        <button onClick={handleRefIncrement}> Increment</button>
      </div>
    </div>
  );
}
