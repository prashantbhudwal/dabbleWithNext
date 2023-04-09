"use client";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@/app/Components/Button";
export default function Test() {
  const [stream, setStream] = useState<string>("");
  const fetchStream = async function () {
    const response = await fetch(`/api/readableStreams/one`);
    const data = await response.json();
    setStream(data);
  };

  return (
    <div>
      <Button onClick={fetchStream}>Fetch Stream</Button>
      {stream}
    </div>
  );
}
