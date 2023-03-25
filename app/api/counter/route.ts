import { NextRequest, NextResponse } from "next/server";

let count = 0;

export async function GET(request: Request) {
  return NextResponse.json({ count });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  count = body.count;
  return NextResponse.json({ count });
}
