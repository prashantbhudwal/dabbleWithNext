"use client";
import Card from "./Card";
import Board from "./Board";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function SimpleDND() {
  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
  ];
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} id={card.id} />
          ))}
        </div>
        <Board />
      </div>
    </DndProvider>
  );
}
