import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const body = "this is a readable stream. Id: ";
  const randomString = Math.random().toString(36).substring(7);
  const randomStreamString = body.concat(randomString);
  return NextResponse.json(randomStreamString);
}
