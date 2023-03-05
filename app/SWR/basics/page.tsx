"use client";
import useSWR from "swr";

export default function SWR101() {
  console.log("render");
  const fetcher = function () {
    return fetch(`https://swapi.dev/api/people/1`)
      .then((res) => res.json())
      .then((data) => data);
  };

  const { data, error, isLoading } = useSWR(`/test/one`, fetcher);

  console.log(data);
  const loadingJSX = <h1>Loading</h1>;
  const errorJSX = <h1>Error</h1>;

  if (error) return errorJSX;
  if (isLoading) return loadingJSX;
  return <h1>{data.name}</h1>;
}
