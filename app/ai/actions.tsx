"use server";

import { createStreamableUI } from "ai/rsc";
import { nanoid } from "nanoid";
import { DummyCard } from "./dummy-card";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitUserMessage(message: string) {
  console.log("User message:", message);
}

const getStockPrice = (symbol: string) => {
  console.log("Getting stock price for", symbol);
  return 100;
};

export async function confirmPurchase(symbol: string, amount: number) {
  console.log("Purchase confirmed");
  const price = getStockPrice(symbol);

  const { value, append, done, error, update } = createStreamableUI(
    <DummyCard
      title="Apple Inc."
      description={`Purchasing ${amount} shares at $${price} each`}
      isLoading={true}
    />
  );
  (async () => {
    await sleep(1000);

    update(
      <DummyCard
        title="Apple Inc."
        description={`Purchasing ${amount} shares at $${price} each`}
        isLoading={true}
      />
    );

    await sleep(1000);

    done(
      <DummyCard
        title="Apple Inc. | Success!"
        description={`You have successfully purchased ${amount} ${symbol}.`}
        isLoading={false}
      />
    );
  })();

  return {
    id: nanoid(),
    display: value,
  };
}
