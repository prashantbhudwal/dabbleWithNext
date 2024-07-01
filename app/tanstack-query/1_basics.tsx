import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Post, myAsyncFunction } from "./mock-api";
export const BaseRoute = function () {
  const [route, SetRoute] = useState("");
  console.log(route);
  const {
    data: dog,
    isLoading,
    isError,
    fetchStatus,
    isFetching,
  } = useQuery<Post>({
    queryFn: myAsyncFunction,
    queryKey: ["dogs"],
    retry: 3,
  });

  if (isLoading) return <>Loading</>;
  if (isError) return <>I am therefore I Err.</>;
  return (
    <div>
      <div>{dog?.title}</div>
      <Button
        onClick={() =>
          SetRoute((route) => {
            if (route === "ONE") return "";
            return "ONE";
          })
        }
      >
        Change Route
      </Button>
      {route === "ONE" && <RouteOne />}
    </div>
  );
};

const RouteOne = function () {
  const {
    data: dogToo,
    fetchStatus: fetchStatusToo,
    isFetching,
  } = useQuery<Post>({
    queryFn: myAsyncFunction,
    queryKey: ["dogs"],
    retry: 3,
  });

  return (
    <>
      <div>{dogToo?.title}</div>
    </>
  );
};
