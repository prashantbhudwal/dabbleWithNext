"use client";
import { Card } from "./Card";

export const Sidebar = () => {
  const cards = [
    { label: "Define", prompt: "Define nouns." },
    { label: "Example", prompt: "Give an example of a noun." },
    // Add more cards as needed
  ];

  return (
    <div className="m-2 w-64 flex-none rounded bg-gray-300 p-4">
      {cards.map((card, index) => (
        <Card key={index} label={card.label} prompt={card.prompt} />
      ))}
    </div>
  );
};
