"use client";
import { useDrop } from "react-dnd";
import { ItemType } from "./types/itemType";
import { useState } from "react";
import { DraggableBlock } from "./DraggableBlock";

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

interface Block {
  id: number;
  text: string;
  bgColor: string;
}

export const MainArea = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.CARD,
    drop: (item) => {
      const randomString = Math.random().toString(36).substring(7);
      setBlocks((prevBlocks) => [
        ...prevBlocks,
        { id: Date.now(), text: randomString, bgColor: randomColor() },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveBlock = (draggedIndex: any, targetIndex: any) => {
    const draggedBlock = blocks[draggedIndex];
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(draggedIndex, 1);
    updatedBlocks.splice(targetIndex, 0, draggedBlock);
    setBlocks(updatedBlocks);
  };

  return (
    <div ref={drop} className="main-area m-2 flex-1 rounded bg-slate-400 p-4">
      {blocks.map((block, index) => (
        <DraggableBlock
          key={block.id}
          id={block.id}
          text={block.text}
          index={index}
          moveBlock={moveBlock}
          bgColor={block.bgColor}
        />
      ))}
    </div>
  );
};
