"use client";
import useFetch from "./hooks/useFetch";

export default function UseEffect() {
  console.log("🟢 Render");

  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/ditto");

  return <>{JSON.stringify(data)}</>;
}
