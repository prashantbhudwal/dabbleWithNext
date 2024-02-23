import { TestingCanvas } from "@/components/testing-canvas";
import { NativeHistoryAPI } from "./native-history-api";
import { RedirectAPI } from "./link";

export default function History() {
  return (
    <TestingCanvas>
      <RedirectAPI />
    </TestingCanvas>
  );
}
