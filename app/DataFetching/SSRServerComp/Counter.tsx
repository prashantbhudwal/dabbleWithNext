"use client";

import { useState } from "react";
import Button from "./Button";

export default function Counter({
  incrementHandler,
  decrementHandler,
  count,
}: any) {
  return (
    <div>
      <h2> Number of pokemon fetched: {count}</h2>
      <div className="flex gap-2">
        <Button onClick={incrementHandler}>Increment</Button>
        <Button onClick={decrementHandler}>Decrement</Button>
      </div>
    </div>
  );
}
