"use client";
import axios from "axios";
import useSWR from "swr";

export default function LoadingWithSuspense() {
  const { data: person } = useSWR("/api/delayedResponse", async () => {
    const response = await axios.get("/api/delayedResponse");
    return response.data.person;
  });

  return <h1>{person?.name}</h1>;
}
