import "server-only";
import { createAI } from "ai/rsc";
import { confirmPurchase } from "./actions";
import { submitUserMessage } from "./chat-action";
import { CreateMessage } from "ai";

const dummyMessages: CreateMessage[] = [
  {
    role: "user",
    content: "Hello, AI!",
  },
  {
    role: "assistant",
    content: "Hello, User!",
  },
];

const initialUIState: {
  id: string;
  display: React.ReactNode;
}[] = [];

export const AI = createAI({
  actions: {
    submitUserMessage,
    confirmPurchase,
  },
  initialUIState: initialUIState,
  initialAIState: dummyMessages,
});
