export function ReactingToInputChallengeTwo({ status = "empty" }) {
  return (
    <div className="border border-amber-500 p-4 flex flex-row gap-3">
      {status}
      <form>
        <label>
          First name: <b>Jane</b>
          <input />
        </label>
        <label>
          Last name: <b>Jacobs</b>
          <input />
        </label>
        <button type="submit">Edit Profile</button>
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
    <>
      {componentStates.map((state) => (
        <ReactingToInputChallengeTwo status={state} key={state} />
      ))}
    </>
  );
}
