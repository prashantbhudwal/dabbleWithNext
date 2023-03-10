"use client";

export default function Button({ onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 rounded-lg p-3 text-blue-100"
    >
      {children}
    </button>
  );
}
