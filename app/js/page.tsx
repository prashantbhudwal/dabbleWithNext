"use client";
import { Button } from "@/components/ui/button";
import { createCounter } from "./create-counter-stateful";

export default function Closures() {
  const { increment, decrement, count, reset } = createCounter();
  return (
    <div>
      <h1>{count}</h1>
      <p>This is a basic React page.</p>
      <Button onClick={() => increment()}>Increment</Button>
      <Button onClick={() => decrement()}>Decrement</Button>
      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
}
