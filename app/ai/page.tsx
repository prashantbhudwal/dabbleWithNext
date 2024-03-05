"use client";
import { Input } from "@/components/ui/input";
import { AI } from "./init";
import { useAIState, useActions, useUIState } from "ai/rsc";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { PurchaseButton } from "./purchase-button";
export default function Page() {
  const { confirmPurchase, submitUserMessage } = useActions<typeof AI>();
  const [uiState, setUIState] = useUIState<typeof AI>();
  const [aiState, setAIState] = useAIState<typeof AI>();
  const [initialValue, setInitialValue] = useState("");
  const [value, setValue] = useState(50);
  console.log("AI state:", aiState);
  console.log("AI State Length", aiState.length);
  console.log("UI state:", uiState);
  function onSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value);
    setValue(newValue);
    const id = nanoid();

    const info = {
      id,
      role: "system" as const,
      content: `[User has changed value to ${newValue}]`,
    };

    if (aiState[aiState.length - 1]?.id === id) {
      setAIState([...aiState.slice(0, -1), info]);
    } else {
      setAIState([...aiState, info]);
    }
  }

  return (
    <div className="flex flex-col space-y-3">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setUIState((currentMessages) => [
            ...currentMessages,
            {
              id: nanoid(),
              display: <div>{initialValue}</div>,
            },
          ]);

          const responseMessage = await submitUserMessage(initialValue);
          setUIState((currentMessages) => [
            ...currentMessages,
            responseMessage,
          ]);
          setInitialValue("");
        }}
      >
        <input
          type="range"
          value={value}
          onChange={onSliderChange}
          min="10"
          max="100"
        />
        <Input
          placeholder="Type a message"
          autoFocus
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
      <PurchaseButton />
      {uiState.map((message) => (
        <div key={message.id}>
          <div>{message.display}</div>
        </div>
      ))}
    </div>
  );
}
