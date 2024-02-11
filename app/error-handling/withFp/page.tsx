"use client";
import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/TaskEither";
import { Button } from "@/components/ui/button";

const firstRiskyOperation = TE.tryCatch(
  () => Promise.resolve("First operation success"),
  (reason) => new Error(`First operation failed: ${reason}`)
);

const asyncRiskyOperation = TE.tryCatch(
  () =>
    new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        reject(
          new Error("Error at level one.", {
            cause: randomNumber,
          })
        );
      } else {
        resolve("First operation success");
      }
    }),
  (reason) => new Error(`First operation failed: ${reason}`)
);

export default function WithFp() {
  return (
    <div className="bg-slate-500">
      <Button>Test</Button>
      WithFp
    </div>
  );
}
