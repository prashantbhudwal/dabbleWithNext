import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const config = {
  runtime: "edge",
};

export async function GET(request: NextRequest) {
  const body = "this is a readable stream. Id: ";
  const randomString = Math.random().toString(36).substring(7);
  const randomStreamString = body.concat(randomString);
  const encoder = new TextEncoder(); // Add this line

  // Create readable Stream
  const readableStream = new ReadableStream({
    start(controller) {
      for (const char of randomStreamString) {
        controller.enqueue(encoder.encode(char)); // Encode into unit8array
      }
      controller.close();
    },
  });

  return new Response(readableStream, {
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
