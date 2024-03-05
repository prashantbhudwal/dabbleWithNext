"use client";
import { useActions, useUIState } from "ai/rsc";
import { AI } from "./init";
import { Button } from "@/components/ui/button";

export function PurchaseButton() {
  const { confirmPurchase } = useActions<typeof AI>();
  const [messages, setMessages] = useUIState<typeof AI>();

  return (
    <Button
      onClick={async () => {
        const newMessage = await confirmPurchase("AAPL", 10);
        setMessages((currentMessages: any) => [...currentMessages, newMessage]);
      }}
    >
      Purchase
    </Button>
  );
}
