import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

async function fetchAllUsers(): Promise<User[]> {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: NextRequest) {
  console.log("GetRan");
  const fetchedUsers = await fetchAllUsers();
  console.log(fetchedUsers);
  return NextResponse.json(fetchedUsers);
}
