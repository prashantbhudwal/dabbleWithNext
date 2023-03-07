import PokemonFetcher from "./PokemonFetcher";
interface Pokemon {
  name: string;
  url: string;
}

export default async function SSRServerComp() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  const data = await response.json();

  const pokemonData: Pokemon[] = data.results;

  return <PokemonFetcher pokemonData={pokemonData} />;
}
