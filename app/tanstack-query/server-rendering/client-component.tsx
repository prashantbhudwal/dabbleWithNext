"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../mock-api";
import { Post } from "../mock-api";

export function ClientComponent({ post }: { post: Post }) {
  const { data: queriedPost } = useQuery<Post>({
    queryFn: () => fetchPost(post.id),
    queryKey: ["post", post.id, "serverRendering"],
    initialData: post,
    staleTime: 5000,
  });

  return (
    <>
      <div className="bg-slate-300">{queriedPost?.body}</div>
    </>
  );
}
