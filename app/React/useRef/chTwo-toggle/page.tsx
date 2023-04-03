"use client";
import { useState, useRef } from "react";
import Button from "@/app/Components/Button";
import ButtonPanel from "@/app/Components/ButtonPanel";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const isOnRef = useRef(false);

  return (
    <ButtonPanel>
      <Button
        onClick={() => {
          setIsOn((isOn) => !isOn);
        }}
      >
        {isOn ? "State: On" : "State: Off"}
      </Button>
      <Button
        onClick={() => {
          isOnRef.current = !isOnRef.current;
        }}
      >
        {isOnRef.current ? "Ref: On" : "Ref: Off"}
      </Button>
    </ButtonPanel>
  );
}
