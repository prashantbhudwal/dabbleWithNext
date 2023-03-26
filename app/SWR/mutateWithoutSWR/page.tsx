/**
 * You are building a component called Counter that fetches and displays a counter value from an API endpoint. The counter value should be fetched from the endpoint every 1 second using setInterval, and the component should include a button that, when clicked, sends a PUT request to the endpoint to increment the counter value by 1.
 *
 * Similar to
 *You are developing a real-time chat application that fetches and displays messages from a remote API endpoint. The chat application should include a button that, when clicked, sends a new message to the endpoint and updates the list of messages with the new message.
 *
 */

"use client";
import { useState, useEffect } from "react";

export default function MutateWithoutSWR() {
  const [count, setCount] = useState(0);

  const fetchCounter = async function () {
    const response = await fetch("/api/counter");
    const data = await response.json();
    setCount(data.count);
  };

  useEffect(() => {
    const intervalId = setInterval(fetchCounter, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const increaseCount = async function () {
    const response = await fetch("/api/counter", {
      method: "PUT",
      body: JSON.stringify({ count: count + 1 }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    setCount(data.count);
  };

  return (
    <div className="flex flex-col">
      <div>{count}</div>
      <div>
        <button onClick={increaseCount}> Increase Count</button>
      </div>
    </div>
  );
}
