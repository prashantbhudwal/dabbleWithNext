"use client";
"A query is a declarative dependency on an asynchronous source of data that is tied to a unique key.";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Post, myAsyncFunction } from "../mock-api";
import { Prefetch } from "../2_prefetch";
import { ErrorBoundaryTesting } from "@/app/React/error-boundary";

// Async source  --> External API or Promise or File Read Operation
//  Declarative Dependency --> Giving it a spect of what you want
// Key

export default function Page() {
  return (
    <div className="flex flex-col">
      <ErrorBoundaryTesting />
      <Prefetch />
    </div>
  );
}
