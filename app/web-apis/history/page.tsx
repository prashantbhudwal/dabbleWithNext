"use client";

import { TestingCanvas } from "@/components/testing-canvas";
import { HistoryAPIProperties } from "./properties";
import { HistoryAPIMethods } from "./methods";

export default function History() {
  return (
    <TestingCanvas>
      <HistoryAPIProperties />
      <HistoryAPIMethods />
    </TestingCanvas>
  );
}
