export function ReactingToInput({ status = "empty" }: { status?: string }) {
  if (status === "empty") {
    return <div className="border border-fuchsia-500">Damn Right!!</div>;
  }

  return (
    <div className="border border-fuchsia-500">
      <h1> The Quiz</h1>
      <form className="flex flex-col gap-3 items-center">
        <p> What do you think about server components?</p>
        <input type={"textarea"} className="border h-14"></input>
        <button className="border"> Submit</button>
      </form>
    </div>
  );
}

export default function Test() {
  return (
    <div className="flex flex-col gap-5">
      <h1>State Storybook</h1>
      <ReactingToInput />
      <ReactingToInput status="success" />
    </div>
  );
}
