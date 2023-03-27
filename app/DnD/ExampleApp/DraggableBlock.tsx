"use client";

import { useDrag, useDrop } from "react-dnd";
import { ItemType } from "./types/itemType";

export const DraggableBlock = ({ id, text, index, moveBlock, bgColor }) => {
  const [, drag] = useDrag(() => ({
    type: ItemType.BLOCK,
    item: { id, index },
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemType.BLOCK,
    hover: (item) => {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) return;

      moveBlock(draggedIndex, targetIndex);
      item.index = targetIndex;
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`text-block my-2 rounded p-3 bg-${bgColor}`}
    >
      {text}
    </div>
  );
};
