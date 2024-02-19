"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const DoNotStopDataFlowInRendering = () => {
  const [initialCount, setInitialCount] = useState<number>(0);
  console.log(initialCount);
  return (
    <div className="space-y-16">
      <div className="flex flex-col space-y-4">
        <div>Initial Count: {initialCount}</div>
        <div>
          <Button onClick={() => setInitialCount(0)}>Reset</Button>
          <Button onClick={() => setInitialCount((prevCount) => prevCount + 1)}>
            +
          </Button>
          <Button onClick={() => setInitialCount((prevCount) => prevCount - 1)}>
            -
          </Button>
        </div>
      </div>
      <PropsInState initialCount={initialCount} />
      <PropsUsedDirectly initialCount={initialCount} />
    </div>
  );
};

const PropsInState = ({ initialCount }: { initialCount: number }) => {
  console.log(initialCount);
  const [count, setCount] = useState(initialCount);
  console.log(count);
  return (
    <div className="flex flex-col space-y-4 border p-10">
      <h1>Props In State</h1>
      <div>Count: {count}</div>
      <div>
        <Button onClick={() => setCount(initialCount)}>Reset</Button>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </Button>
      </div>
    </div>
  );
};

const PropsUsedDirectly = ({ initialCount }: { initialCount: number }) => {
  console.log(initialCount);
  const [count, setCount] = useState(0);
  console.log(count);
  const totalCount = initialCount + count; // Derived State
  return (
    <div className="flex flex-col space-y-4 border p-10">
      <h1>Props Used Directly</h1>
      <div>Count: {totalCount}</div>
      <div>
        <Button onClick={() => setCount(initialCount)}>Reset</Button>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </Button>
      </div>
    </div>
  );
};
