"use client";

import { useEffect, useState } from "react";

export default function useFetch(options: { url: string }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (options.url) {
      const fetchPokemon = async function () {
        const response = await fetch(options.url);
        const jsonData = await response.json();
        const name = jsonData.forms[0].name;
        setData(name);
      };
      fetchPokemon();
    }
  }, [options]);
  return {
    data,
  };
}
