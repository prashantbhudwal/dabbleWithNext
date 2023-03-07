import { headers } from "next/headers";
import { cookies } from "next/headers";
import PokemonFetcher from "./PokemonFetcher";
interface Pokemon {
  name: string;
  url: string;
}

export default async function SSRServerComp() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12", {
    cache: "no-store",
  });
  const data = await response.json();

  const pokemonData: Pokemon[] = data.results;

  // Next.js provides helpful server functions you may need when fetching data in Server Components:
  const headerFromPokeAPI = headers();
  const cookieFromPokeAPI = cookies();

  return <PokemonFetcher pokemonData={pokemonData} />;
}
