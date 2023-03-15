export function ReactingToInput({ status = "empty" }: { status?: string }) {
  if (status === "success") {
    return (
      <div className="border border-fuchsia-500 p-4">
        <h1> The Quiz - {status}</h1>Damn Right!!
      </div>
    );
  }

  return (
    <div className="border border-fuchsia-500 p-4">
      <h1> The Quiz - {status} state</h1>
      <form className="flex flex-col gap-2 items-center p-3">
        <p> What do you think about server components?</p>
        <textarea
          placeholder="Write good things here..."
          className="border h-14 disabled:placeholder:text-gray-300"
          disabled={status == "submitting"}
        ></textarea>
        <button
          className="border bg-green-500 disabled:bg-slate-400 disabled:text-slate-50 px-4 py-2"
          disabled={status === "submitting" || status === "empty"}
        >
          {" "}
          Submit
        </button>
        {status === "error" && (
          <p className="text-red-600">
            You are wrong, server components are good! Try again and write good
            stuff!
          </p>
        )}
      </form>
    </div>
  );
}

export default function Storybook() {
  let visualStates = ["empty", "typing", "submitting", "success", "error"];
  return (
    <div className="flex flex-col gap-5">
      <h1>State Storybook</h1>
      {visualStates.map((state) => (
        <ReactingToInput status={state} key={state} />
      ))}
    </div>
  );
}
