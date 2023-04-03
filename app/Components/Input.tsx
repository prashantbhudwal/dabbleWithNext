import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="rounded border border-gray-400 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
}
