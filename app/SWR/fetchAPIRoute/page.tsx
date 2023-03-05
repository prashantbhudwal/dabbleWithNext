"use client";
import useSWR from "swr";

export default function SWR101() {
  const fetcher = function () {
    return fetch(`/api/hello`)
      .then((res) => res.json())
      .then((data) => data);
  };

  const { data, error, isLoading } = useSWR(`/api/test`, fetcher);

  const loadingJSX = <h1>Loading</h1>;
  const errorJSX = <h1>Error</h1>;

  if (error) return errorJSX;
  if (isLoading) return loadingJSX;
  return <h1>{data.person.name}</h1>;
}
