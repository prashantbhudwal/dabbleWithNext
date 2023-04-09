"use client";
import { useState } from "react";
import Button from "@/app/Components/Button";

export default function Test() {
  const [stream, setStream] = useState<string>("");

  const fetchStream = async function () {
    const response = await fetch(`/api/readableStreams/one`);
    const readableStream = response.body;
    const reader = readableStream?.getReader();
    const decoder = new TextDecoder(); // Add this line

    if (reader) {
      let done = false;
      while (!done) {
        try {
          const { value, done: streamDone } = await reader.read();
          done = streamDone;
          if (!done) {
            const decodedValue = decoder.decode(value);
            console.log(decodedValue);
            setStream((prevStream) => prevStream + decodedValue);
          }
        } catch (error) {
          console.error("Error reading stream:", error);
          done = true;
        }
      }
      console.log("done");
    }
  };

  return (
    <div>
      <Button onClick={fetchStream}>Fetch Stream</Button>
      <div>{stream}</div>
    </div>
  );
}
