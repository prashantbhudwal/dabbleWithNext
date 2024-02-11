"use client";
import { Button } from "@/components/ui/button";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";
import pRetry from "p-retry";
import { useState } from "react";

const thirdRiskyOperation = async function (): Promise<number> {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    throw new Error("Error at level three", {
      cause: randomNumber,
    });
  }
  return randomNumber;
};

const secondRiskyOperation = async function (): Promise<string> {
  try {
    const randomNumber = Math.random();
    const secondRandomNumber = await thirdRiskyOperation();
    if (randomNumber < 0.5) {
      throw new Error("Error: Level II > Try Block", {
        cause: randomNumber,
      });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error)
      throw new Error("Error: Level II > Catch block", {
        cause: error,
      });
  } finally {
    console.log("finally always works");
  }
  return "Successfully Executed";
};

const firstRiskyOperation = function (number: number) {
  console.log("attempt number: ", number);
  const randomNumber = Math.random();
  if (randomNumber * number > 0.5) {
    throw new Error("Error at level one.", {
      cause: randomNumber,
    });
  }
};

export default function Home() {
  const [error, setError] = useState<Error | null>(null);
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const handleClick = async function () {
    console.log("execution starts");
    setLoading(true);
    setMessage("");
    setError(null);
    try {
      await pRetry((attemptNumber) => firstRiskyOperation(attemptNumber), {
        retries: 3,
      });
      const successMessage = await secondRiskyOperation();
      setMessage(successMessage);
      return;
    } catch (error) {
      if (error instanceof Error) setError(error);
      else console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 max-w-4xl">
      <h1>Error Handling</h1>
      <div className="flex flex-col p-4 border border-red-500">
        <div className="font-bold text-primary underline underline-offset-4">
          Error Messages
        </div>
        <div className="bg-gray-100">{JSON.stringify(error?.message)} </div>
        <div className="bg-gray-100">{JSON.stringify(error?.cause)} </div>
      </div>
      <div className="flex flex-col p-4 border border-green-500">
        <div className="font-bold text-primary underline underline-offset-4">
          Success Messages
        </div>
        <div className="bg-gray-100">{message} </div>
      </div>
      <Button onClick={handleClick}>Run Operation</Button>
    </div>
  );
}
