"use client";
import { useState, useEffect } from "react";
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

export default function ReadingDatabase() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const fetchedUsers = await fetchAllUsers();
      setUsers(fetchedUsers);
    }

    getUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
