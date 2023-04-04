"use client";
import Button from "@/app/Components/Button";
import { User } from "@prisma/client";
import axios from "axios";

const createUser = async function () {
  try {
    const response = await axios.post("/api/dabbleWithPrisma", {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default function WritingData() {
  return (
    <div>
      <Button onClick={createUser}>Write Data</Button>
    </div>
  );
}
