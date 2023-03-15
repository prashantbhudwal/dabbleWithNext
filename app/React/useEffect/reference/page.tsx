"use client";
import { useState } from "react";
import useFetch from "./useFetch";

export default function UseEffectReference() {
  console.log("🟢 Render");
  const [url, setUrl] = useState<string>("");

  //Change url to an object

  const { data } = useFetch({ url });
  return (
    <div className="flex flex-col gap-2">
      <button
        className="ring-1 bg-slate-400 p-4 rounded-xl"
        onClick={() => setUrl("https://pokeapi.co/api/v2/pokemon/pikachu")}
      >
        Get Pikachu
      </button>
      <button
        className="ring-1 bg-slate-400 p-4 rounded-xl"
        onClick={() => setUrl("https://pokeapi.co/api/v2/pokemon/ditto")}
      >
        Get Ditto
      </button>
      {data && JSON.stringify(data)}
    </div>
  );
}
