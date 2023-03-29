import { NextRequest, NextResponse } from "next/server";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
  await delay(2000);
  const response = await fetch(`https://swapi.dev/api/people/2`);
  const data = await response.json();
  const person = await data;
  return NextResponse.json({ person });
}
