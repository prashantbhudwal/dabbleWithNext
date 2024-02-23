"use client";
import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";
import { nanoid } from "nanoid";

const routes = [
  { name: "React 18", path: "/React" },
  { name: "SWR", path: "/SWR" },
  { name: "NextJs 13", path: "/Next" },
  { name: "React Drag And Drop", path: "/DnD" },
  { name: "Supabase", path: "/Supabase" },
  { name: "Prisma", path: "/Prisma" },
  { name: "Jotai", path: "/Jotai" },
  { name: "NextAuth", path: "/NextAuth" },
  { name: "Zustand", path: "/zustand" },
  { name: "Error Handling", path: "/error-handling" },
  { name: "CSS", path: "/css" },
];

export default function Home() {
  return (
    <LinkTree>
      {routes.map((route, index) => {
        return (
          <Link href={route.path} key={nanoid(5)}>
            {route.name}
          </Link>
        );
      })}
    </LinkTree>
  );
}
