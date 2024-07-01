import { Button } from "@/components/ui/button";
import { QueryClient } from "@tanstack/react-query";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Post, fetchPost, fetchPosts } from "./mock-api";

export function Prefetch() {
  const queryClient = useQueryClient();
  const [selectedPostId, setSelectedPostId] = useState<number>();

  console.log(selectedPostId);

  const {
    data: posts,
    isLoading,
    isFetching,
  } = useQuery<Post[]>({ queryFn: fetchPosts, queryKey: ["posts"] });

  console.log(posts);

  const preFetchPost = async function (postId: number) {
    console.log(postId);
    console.log("I ran!");
    queryClient.prefetchQuery<Post>({
      queryFn: () => fetchPost(postId),
      queryKey: ["post", postId],
      staleTime: Infinity,
    });
  };

  const renderPost = async function (postId: number) {
    console.log("I ran");
    setSelectedPostId(postId);
  };

  console.log(typeof selectedPostId);
  return (
    <div className="flex flex-row">
      <div className="flex flex-col space-y-4 w-1/12 truncate">
        {posts?.map((post) => (
          <Button
            variant={"outline"}
            key={post.id}
            onMouseEnter={() => preFetchPost(post.id)}
            onClick={() => renderPost(post.id)}
          >
            {post.title}
          </Button>
        ))}
      </div>
      {selectedPostId && <PostRenderer postId={selectedPostId} />}
    </div>
  );
}

const PostRenderer = function ({ postId }: { postId: number }) {
  console.log("I ran");
  const { data: post, isFetching } = useQuery<Post>({
    queryFn: () => fetchPost(postId),
    queryKey: ["post", postId],
  });

  console.log(isFetching);

  console.log(post);

  return <div className="bg-green-700">{post?.body}</div>;
};
