"use client";
import Button from "@/app/Components/Button";
import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation";

const arrayOfRandomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

export const NativeHistoryAPI = function () {
  return (
    <div className="flex flex-row w-full h-full space-x-3">
      <ReplaceState />
      <PushState />
    </div>
  );
};

const ReplaceState = function () {
  const searchParams = useSearchParams();
  const order = searchParams.get("sort") || "";

  const sortNumbers = (order: "asc" | "dsc") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", order);
    history.replaceState(
      null, // state
      "", // title
      `?${params.toString()}` // url
    );
  };

  let sortedNumbers = [...arrayOfRandomNumbers]; // create a copy of the array

  if (order === "asc") {
    sortedNumbers.sort((a, b) => a - b);
  } else if (order === "dsc") {
    sortedNumbers.sort((a, b) => b - a);
  }

  return (
    <div className="overflow-auto">
      <div className="flex  space-x-2">
        <Button
          onClick={() => {
            sortNumbers("asc");
          }}
        >
          Sort Asc <span>↑</span>
        </Button>
        <Button
          onClick={() => {
            sortNumbers("dsc");
          }}
        >
          Sort Desc <span>↓</span>
        </Button>
      </div>
      {sortedNumbers.map((number, index) => {
        return <div key={nanoid(5)}>{number}</div>;
      })}
    </div>
  );
};

const PushState = function () {
  const searchParams = useSearchParams();
  const order = searchParams.get("sort") || "";

  const sortNumbers = (order: "asc" | "dsc") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", order);
    history.pushState(
      null, // state
      "", // title
      `?${params.toString()}` // url
    );
  };

  let sortedNumbers = [...arrayOfRandomNumbers]; // create a copy of the array

  if (order === "asc") {
    sortedNumbers.sort((a, b) => a - b);
  } else if (order === "dsc") {
    sortedNumbers.sort((a, b) => b - a);
  }

  return (
    <div className="overflow-auto">
      <div className="flex  space-x-2">
        <Button
          onClick={() => {
            sortNumbers("asc");
          }}
        >
          Sort Asc <span>↑</span>
        </Button>
        <Button
          onClick={() => {
            sortNumbers("dsc");
          }}
        >
          Sort Desc <span>↓</span>
        </Button>
      </div>
      {sortedNumbers.map((number, index) => {
        return <div key={nanoid(5)}>{number}</div>;
      })}
    </div>
  );
};
