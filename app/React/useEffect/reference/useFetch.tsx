"use client";

import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
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
