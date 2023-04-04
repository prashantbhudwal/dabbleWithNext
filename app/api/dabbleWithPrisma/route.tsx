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
  const fetchedUsers = await fetchAllUsers();
  return NextResponse.json(fetchedUsers);
}

async function createUser(userData: User) {
  try {
    await prisma.user.create({
      data: userData,
    });
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user: ", error);
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  await createUser(data);
  const body = "Users Created";
  return NextResponse.json({ body });
}
