"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type People<T> = {
  properties: T;
  numberOfDogs: number;
};

export default function Interfaces() {
  const { data, error, loading } = useFetchData("");
  if (loading) return <>Loading...</>;
  return (
    <div>
      {error && <>{error}</>}
      {JSON.stringify(data)}
    </div>
  );
}

type UseFetchData<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};
function useFetchData<T>(url: string): UseFetchData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
