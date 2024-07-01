"use client";
import { ErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";

export function ErrorBoundaryTesting() {
  return (
    <div className="flex flex-col">
      <div>The state of man is useless.</div>
      <ErrorBoundary
        fallback={
          <div className="bg-slate-500 text-xl">
            I am what you have fallen back to. Me.
          </div>
        }
      >
        <ComponentWithRandomError />
      </ErrorBoundary>
    </div>
  );
}

const ComponentWithRandomError = function () {
  useEffect(() => {
    if (Math.random() > 0.5)
      throw new Error("Now I am become error, destroyer of components.");
  }, []);

  return <>No Error this time</>;
};
