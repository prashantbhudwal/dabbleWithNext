"use client";
import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  url: string;
}
export default function DataFetchingWithUseEffect() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([{ name: "", url: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const data = await response.json();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  const pokeArray = pokemon.map((pokemon, index) => {
    return (
      <h1
        key={index}
        className="bg-emerald-500 text-gray-900 p-2 rounded-md uppercase"
      >
        {pokemon.name}
      </h1>
    );
  });

  return <div className="flex flex-col gap-3">{pokeArray}</div>;
}
