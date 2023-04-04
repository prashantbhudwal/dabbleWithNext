"use client";
import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";

export default function Home() {
  return (
    <LinkTree>
      <Link href="/React"> Learn React 18</Link>
      <Link href="/SWR"> Learn SWR </Link>
      <Link href="/Next"> Learn NextJs 13 </Link>
      <Link href="/DnD"> Learn React Drag And Drop </Link>
      <Link href="/Supabase"> Learn Supabase </Link>
      <Link href="/Prisma"> Learn Prisma </Link>
    </LinkTree>
  );
}
