"use client";
import { useState } from "react";
export default function ReactingToInputChallengeTwo() {
  const [isEditing, setIsEditing] = useState(true);
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
    setIsEditing((prevStatus) => !prevStatus);
  };

  return (
    <div className="border border-amber-500 flex flex-col gap-3">
      <div className="bg-zinc-300 w-48 px-4 py-2 text-zinc-500 ml-auto">
        State: {isEditing ? "Editing" : "Saved"}
      </div>
      <form className="flex flex-col gap-1  p-4">
        <label>
          First name:
          {!isEditing && <b>{formData.firstName}</b>}
          {isEditing && (
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
          {!isEditing && <b>{formData.lastName}</b>}
          {isEditing && (
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
          {isEditing ? "Save Profile" : "Edit Profile"}
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

// export default function Storybook() {
//   const componentStates = ["editing", "saved"];

//   return (
//     <div className="flex flex-col gap-2">
//       Storybook
//       {componentStates.map((state) => (
//         <ReactingToInputChallengeTwo status={state} key={state} />
//       ))}
//     </div>
//   );
// }
