"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "./store";

export const BreedBears = () => {
const { bears, increasePopulation, removeAllBears } = useStore(state => ({
    bears: state.bears,
    increasePopulation: state.increasePopulation,
    removeAllBears: state.removeAllBears
}));
  return (
    <div className="space-y-2 flex flex-col">
      <div>{bears}</div>
      <Button onClick={() => increasePopulation(10)}>Increment</Button>
      <Button onClick={() => removeAllBears()}>Remove All Bears</Button>
    </div>
  );
};
