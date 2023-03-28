"use client";

import { useDrag, DragSourceMonitor } from "react-dnd";

export default function Card({ title, id }: { title: string; id: number }) {
  const specObject = {
    type: "Box",
    item: { id, title },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  };
  const [{ isDragging }, drag, dragPreview] = useDrag(() => specObject);
  return (
    <div
      ref={dragPreview}
      className={`h-24 w-24 rounded-sm bg-pink-500 p-4 text-center ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div role={"Handle"} ref={drag}>
        {title}
      </div>
    </div>
  );
}
