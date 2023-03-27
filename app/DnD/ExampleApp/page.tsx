"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MainArea } from "./MainArea";
import { Sidebar } from "./Sidebar";

export default function DND() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen">
        <Sidebar />
        <MainArea />
      </div>
    </DndProvider>
  );
}
