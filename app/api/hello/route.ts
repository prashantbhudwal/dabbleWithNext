import { NextRequest, NextResponse } from "next/server";
export async function GET(request: Request) {
  const response = await fetch(`https://swapi.dev/api/people/2`);
  const data = await response.json();
  const person = await data;
  return NextResponse.json({ person });
}
