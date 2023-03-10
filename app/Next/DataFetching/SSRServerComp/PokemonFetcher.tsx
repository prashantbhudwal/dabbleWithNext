"use client";
import { useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

import Counter from "./Counter";

export default function PokeFetcher({
  pokemonData,
}: {
  pokemonData: Pokemon[];
}) {
  const [count, setCount] = useState<number>(0);

  const pokeArray = pokemonData.map((pokemon, index) => {
    return (
      <h1
        key={index}
        className="bg-emerald-500 text-gray-900 p-2 rounded-md uppercase"
      >
        {`${index + 1}. ${pokemon.name}`}
      </h1>
    );
  });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col gap-3">
      {" "}
      <Counter
        incrementHandler={increment}
        decrementHandler={decrement}
        count={count}
      />
      {pokeArray}
    </div>
  );
}
