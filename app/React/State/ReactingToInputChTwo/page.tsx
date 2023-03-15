"use client";
export function ReactingToInputChallengeTwo({ status = "empty" }) {
  return (
    <div className="border border-amber-500 flex flex-col gap-3">
      <div className="bg-zinc-300 w-48 px-4 py-2 text-zinc-500 ml-auto">
        State: {status}
      </div>
      <form className="flex flex-col gap-1  p-4">
        <label>
          First name: <b>Jane</b>
          <input className="border" />
        </label>
        <label>
          Last name: <b>Jacobs</b>
          <input className="border" />
        </label>
        <button className="bg-green-600 py-2 px-4 rounded-md" type="submit">
          Edit Profile
        </button>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </form>
    </div>
  );
}

export default function Storybook() {
  const componentStates = ["empty", "editing", "saved"];

  return (
    <div className="flex flex-col gap-2">
      {componentStates.map((state) => (
        <ReactingToInputChallengeTwo status={state} key={state} />
      ))}
    </div>
  );
}
