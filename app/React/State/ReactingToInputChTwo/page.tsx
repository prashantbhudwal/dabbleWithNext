"use client";
import { useState } from "react";
export function ReactingToInputChallengeTwo({ status = "empty" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleEditing = function (e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = function (e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    
  };

  return (
    <div className="border border-amber-500 flex flex-col gap-3">
      <div className="bg-zinc-300 w-48 px-4 py-2 text-zinc-500 ml-auto">
        State: {status}
      </div>
      <form className="flex flex-col gap-1  p-4">
        <label>
          First name:
          {status === "saved" && <b>{formData.firstName}</b>}
          {status === "editing" && (
            <input
              value={formData.firstName}
              className="border"
              onChange={handleEditing}
              name="firstName"
            />
          )}
        </label>
        <label>
          Last name:
          {status === "saved" && <b>{formData.lastName}</b>}
          {status === "editing" && (
            <input
              value={formData.lastName}
              className="border"
              onChange={handleEditing}
              name="lastName"
            />
          )}
        </label>

        <button
          className="bg-green-600 py-2 px-4 rounded-md"
          type="submit"
          onClick={handleClick}
        >
          {status === "saved" ? "Edit Profile" : "Save Profile"}
        </button>

        <p>
          <i>
            Hello, {formData.firstName} {formData.lastName}
          </i>
        </p>
      </form>
    </div>
  );
}

export default function Storybook() {
  const componentStates = ["editing", "saved"];

  return (
    <div className="flex flex-col gap-2">
      Storybook
      {componentStates.map((state) => (
        <ReactingToInputChallengeTwo status={state} key={state} />
      ))}
    </div>
  );
}
