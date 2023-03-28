"use client";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function Card({ title }: { title: string }) {
  const specObject = {
    type: "Box",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  };

  const [{ isDragging }, drag, dragPreview] = useDrag(() => specObject);

  return (
    <div
      ref={dragPreview}
      className={`h-12 w-12 rounded-sm bg-pink-500 text-center ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div role={"Handle"} ref={drag}>
        {title}
      </div>
    </div>
  );
}

function Board() {
  const specObject = {
    accept: "Box",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => specObject);
  return (
    <div
      className={`h-64 rounded-md  p-5 ${
        isOver ? "bg-orange-400" : "bg-slate-300"
      }`}
      ref={drop}
      role={"Board"}
    >
      {canDrop ? "Release to drop" : "Drag the card here"}
    </div>
  );
}

export default function SimpleDND() {
  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <Card title="1" />
        <Board />
      </>
    </DndProvider>
  );
}
