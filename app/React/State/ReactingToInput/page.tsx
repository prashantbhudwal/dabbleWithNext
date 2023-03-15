"use client";

import { useState } from "react";
// export  function ReactingToInput({ status = "empty" }: { status?: string }) {
export default function ReactingToInput() {
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<string>();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleClick = async function (e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const message = await submitForm(input);
      //@ts-ignore
      setSuccess(message);
      setStatus("success");
    } catch (err: any) {
      console.log(err);
      setStatus("typing");
      setError(err);
    }
  };

  const handleTyping = function (e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  };

  if (status === "success") {
    return (
      <div className="border border-fuchsia-500 p-4">
        <h1> The Quiz - {status}</h1>
        {success}
      </div>
    );
  }

  return (
    <div className="border border-fuchsia-500 p-4">
      <h1> The Quiz - {status} state</h1>
      <form className="flex flex-col gap-2 items-center p-3">
        <p> Are Server Components Good? (Y/N)</p>
        <textarea
          value={input}
          onChange={handleTyping}
          placeholder="Y is the only answer"
          className="border h-14 disabled:placeholder:text-gray-300"
          disabled={status == "submitting"}
        ></textarea>
        <button
          onClick={handleClick}
          className="border bg-green-500 disabled:bg-slate-400 disabled:text-slate-50 px-4 py-2"
          disabled={status === "submitting" || input.length === 0}
        >
          {" "}
          Submit
        </button>
        {/* @ts-ignore */}
        {error != null && <p className="text-red-600">{error.message}</p>}
      </form>
    </div>
  );
}

function submitForm(answer: string) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      answer === "Y"
        ? resolve("Damn Right!")
        : reject(
            new Error(
              "You are wrong, server components are good! Try again and write good stuff!"
            )
          );
    }, 2000);
  });
  return promise;
}

// export default function Storybook() {
//   let visualStates = ["empty", "typing", "submitting", "success", "error"];
//   return (
//     <div className="flex flex-col gap-5">
//       <h1>State Storybook</h1>
//       {visualStates.map((state) => (
//         <ReactingToInput status={state} key={state} />
//       ))}
//     </div>
//   );
// }
