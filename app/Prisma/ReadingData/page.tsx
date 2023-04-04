"use client";
import {User } from "@prisma/client";
import useSWR from "swr";

export default function ReadingDatabase() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data: users, error } = useSWR("/api/dabbleWithPrisma", fetcher);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users && users.map((user: User) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
