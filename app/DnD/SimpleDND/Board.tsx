"use client";
import { useState } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import Card from "./Card";

type Card = {
  id: number;
  title: string;
};

export default function Board() {
  const [cards, setCards] = useState<Card[]>([]);
  const specObject = {
    accept: "Box",
    drop: (item: Card) => setCards((prevCards) => [...prevCards, item]),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => specObject);
  return (
    <div
      className={`flex h-64 flex-row gap-3 rounded-md  p-5 ${
        isOver ? "bg-orange-400" : "bg-slate-300"
      }`}
      ref={drop}
      role={"Board"}
    >
      {canDrop ? "Release to drop" : "Drag the card here"}
      {cards?.map((card) => (
        <Card key={card.id} title={card.title} id={card.id} />
      ))}
    </div>
  );
}
