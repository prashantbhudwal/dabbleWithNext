"use client";
import Button from "@/app/Components/Button";
import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timOutIdRef = useRef(0);

  function handleSend() {
    setIsSending(true);
    timOutIdRef.current = window.setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timOutIdRef.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`ring-1`}
      />
      <Button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </Button>
      {isSending && <Button onClick={handleUndo}>Undo</Button>}
    </>
  );
}
