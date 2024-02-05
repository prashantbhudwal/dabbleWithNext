"use client";
import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";

export default function Home() {
  return (
    <LinkTree>
      <Link href="/React"> React 18</Link>
      <Link href="/SWR"> SWR </Link>
      <Link href="/Next"> NextJs 13 </Link>
      <Link href="/DnD"> React Drag And Drop </Link>
      <Link href="/Supabase"> Supabase </Link>
      <Link href="/Prisma"> Prisma </Link>
      <Link href="/Jotai"> Jotai </Link>
      <Link href="/NextAuth"> NextAuth </Link>
      <Link href={"/zustand"}>Zustand</Link>
      <Link href={"/error-handling"}>Error Handling</Link>
    </LinkTree>
  );
}
