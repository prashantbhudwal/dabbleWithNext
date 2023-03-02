"use client";
import useSWR from "swr";
import { useState } from "react";

export default function Profile() {
  const [fetchData, setFetchData] = useState(false);
  const endpoint =
    "https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6";
  const fetcher = (url: any) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) => data);
  const { data, error } = useSWR(fetchData ? endpoint : null, fetcher);

  const handleClick = () => {
    setFetchData((prevState) => !prevState);
  };
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <button onClick={handleClick}>Load data</button>
      </div>
    );
  return <div>{data.colors[0].hex.value}</div>;
}
