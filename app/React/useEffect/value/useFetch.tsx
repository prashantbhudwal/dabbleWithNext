"use client";

import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);

  // Usual way
  useEffect(() => {
    if (url !== "") {
      const fetchPokemon = async function () {
        const response = await fetch(url);
        const jsonData = await response.json();
        const name = jsonData.forms[0].name;
        setData(name);
      };
      fetchPokemon();
    }
  }, [url]);
  return {
    data,
  };
}

/** Alternate way that works
   * useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const jsonData = await response.json();
      return jsonData;
    }
    const data = fetchPokemon();
    // const data = await fetchPokemon(); --> does not work because can't use await at top level
    // console.log(data); --> logs a promise
    // console.log(data.height); --> undefined because data is a promise
    //This works
    fetchPokemon().then((data) => setData(data));
  }, []);
   */

/** This does not work 
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const jsonData = await response.json();
      return jsonData; //returns a promise that needs to be resolved later.
    }
    setData(await fetchPokemon());
    }, []);
   */
