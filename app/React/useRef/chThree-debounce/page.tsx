"use client";
import { useState, useRef } from "react";
import Button from "@/app/Components/Button";
import ButtonPanel from "@/app/Components/ButtonPanel";

interface DebouncedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
  const intervalIdRef = useRef(0);

  return (
    <Button
      onClick={() => {
        clearTimeout(intervalIdRef.current);
        intervalIdRef.current = window.setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </Button>
  );
}

export default function Dashboard() {
  return (
    <ButtonPanel>
      <DebouncedButton onClick={() => alert("Spaceship launched!")}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Soup boiled!")}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby sung!")}>
        Sing a lullaby
      </DebouncedButton>
    </ButtonPanel>
  );
}
