"use server";
import OpenAI from "openai";
import { getMutableAIState, render } from "ai/rsc";
import { AI } from "./init";
import { nanoid } from "nanoid";

const openai = new OpenAI();

export async function submitUserMessage(content: string) {
  const { done: aiStateWhenDone, get, update } = getMutableAIState();

  const history = get();

  update([
    ...history,
    {
      role: "user",
      content,
    },
  ]);

  const ui = render({
    model: "gpt-3.5-turbo",
    provider: openai,
    messages: [
      {
        role: "system",
        content: "You are jigglypuff",
      },
      {
        role: "user",
        content: content,
      },
    ],
    text: ({ content, done }) => {
      if (done)
        aiStateWhenDone([
          ...history,
          {
            role: "assistant",
            content,
          },
        ]);

      return <div>{content}</div>;
    },
  });

  return {
    id: nanoid(),
    display: ui,
  };
}
