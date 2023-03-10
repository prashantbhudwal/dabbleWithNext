"use client";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

export default function UseEffect() {
  console.log("🟢 Render");
  const [url, setUrl] = useState<string>("");
  const { data } = useFetch(url);

  const handleClick = function () {
    const ditto = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const pikachu = `https://pokeapi.co/api/v2/pokemon/pikachu`;

    setUrl((prevUrl) => {
      return prevUrl === ditto ? pikachu : ditto;
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <button
        className="ring-1 bg-slate-400 p-4 rounded-xl"
        onClick={handleClick}
      >
        Toggle Pokemon
      </button>
      {data && JSON.stringify(data)}
    </div>
  );
}
