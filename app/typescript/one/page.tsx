"use client";
import React, { useState } from "react";

import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function for changing color on odd and even numbers, using typescript generics
function changeColor(num: number) {
  if (num % 2 === 0) {
    return "bg-green-300";
  } else {
    return "bg-red-300";
  }
}

//Write a use case of generics based on the code around here. Make sure to use generic.
function aStringOrNumber<T>(arg: T): T {
  return arg;
}

export default function Test() {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <h1 className="bg-slate-300 text-blue-800 font-extrabold text-3xl">
        Test
      </h1>
      <p className={changeColor(state)}>State: {state}</p>
      <button
        onClick={() => setState(state + 1)}
        className={
          "bg-slate-900 rounded-md text-slate-200 p-2 hover:scale-105 shadow-lg cursor-pointer"
        }
      >
        Increment
      </button>
    </div>
  );
}
