"use client";
import { useDrag } from "react-dnd";
import { ItemType } from "./types/itemType";

export const Card = ({ prompt, label }:{prompt: string, label: string}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CARD,
    item: { prompt },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="m-2 cursor-pointer rounded bg-gray-200 p-3"
    >
      {label}
    </div>
  );
};
