"use client";
import { useState, useRef } from "react";
import Button from "@/app/Components/Button";
import ButtonPanel from "@/app/Components/ButtonPanel";
export default function Stopwatch() {
  console.log("rendered");

  const [startTime, setStartTime] = useState<number | undefined>();
  const [currentTime, setCurrentTime] = useState<number | undefined>();
  const intervalRef = useRef<number | undefined>();

  const startTimer = function () {
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      // Adding window removes the error because it clarifies the env
      setCurrentTime(Date.now());
    }, 10);
    console.log(intervalRef.current);
  };
  console.log(intervalRef.current);

  const endTimer = function () {
    clearInterval(intervalRef.current);
  };

  let passedTime = 0;
  if (startTime != null && currentTime != null) {
    passedTime = (currentTime - startTime) / 1000;
  }

  return (
    <>
      <div>
        <>Time:{passedTime.toFixed(3)}</>
      </div>
      <ButtonPanel>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={endTimer}>Stop</Button>
      </ButtonPanel>
    </>
  );
}
