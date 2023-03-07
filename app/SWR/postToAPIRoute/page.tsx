"use client";
import useSWR from "swr";
import { useState } from "react";

export default function PostWithFetch() {
  const [input, setInput] = useState<string>("");
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const postWithFetch = function () {
    const body = {
      prompt: input,
    };
    return fetch(`/api/learnPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  const { data, error, isLoading } = useSWR(
    isFetched ? `/api/learnPost` : null,
    postWithFetch
  );

  console.log(data);

  const loadingJSX = <h1>Loading</h1>;
  const errorJSX = <h1>Error</h1>;

  if (error) return errorJSX;
  if (isLoading) return loadingJSX;
  return (
    <div className="flex flex-col gap-3 items-center">
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className="border-slate-700 rounded-md bg-slate-300 text-black p-3  w-96"
      />

      <button
        onClick={() => setIsFetched(!isFetched)}
        className="bg-teal-400 w-20 rounded-sm p-2"
      >
        Send
      </button>
      <h1>Response will show here</h1>
    </div>
  );
}
