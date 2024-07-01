"use client";
import { useQuery } from "@tanstack/react-query";
import { TODOs } from "./todos";
import axios from "axios";
const api = "https://jsonplaceholder.typicode.com/posts";

export default function Page() {
  const { data, isError, isFetched, isFetching, isLoading } = useBasicQuery();

  console.log(data);

  if (isLoading) return <>Loading</>;

  return (
    <div className="flex flex-col space-y-2">
      {data?.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}

const useBasicQuery = function () {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  return useQuery<Post[]>({
    queryKey: ["postFetcher"],
    queryFn: () => axios.get(api).then((res) => res.data),
  });
};
