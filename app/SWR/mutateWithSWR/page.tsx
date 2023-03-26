"use client";
import useSWR, { mutate } from "swr";
import { useState, useEffect } from "react";
import axios from "axios";

const fetchCounter = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

export default function Counter() {
  const { data, mutate } = useSWR("/api/counter/", fetchCounter, {
    refreshInterval: 1000,
  });

  const handleIncrement = async () => {
    const newCount = (data?.count || 0) + 1;

    // Optimistically update the cache
    mutate({ count: newCount }, false);

    // Update the server
    try {
      axios.put(
        "/api/counter",
        { count: newCount },
        { headers: { "Content-Type": "application/json" } }
      );
      // Update the cache with the latest data from the server
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Counter: {data?.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
