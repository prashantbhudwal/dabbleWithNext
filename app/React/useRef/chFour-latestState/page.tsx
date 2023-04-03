"use client";
import { useState, useRef } from "react";
import Button from "@/app/Components/Button";
import Input from "@/app/Components/Input";

export default function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef();

  function handleSend() {
    window.setTimeout(() => {
      alert("Sending: " + text);
    }, 3000);
  }

  return (
    <>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="rounded border border-gray-400 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <Button onClick={handleSend}>Send</Button>
    </>
  );
}
