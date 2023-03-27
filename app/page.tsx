"use client";
import Link from "next/link";
import styled from "styled-components";
import Profile from "./Components/Profile";
import SideEffects from "./React/SideEffects/page";

const StyledApp = styled.main`
  font-family: sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: underline;
    color: #0070f3;
    font-size: large;
  }
`;

export default function Home() {
  return (
    <StyledApp className="flex flex-col gap-3">
      <Link href="/React"> Learn React 18</Link>
      <Link href="/SWR"> Learn SWR </Link>
      <Link href="/Next"> Learn NextJs 13 </Link>
      <Link href="/DnD"> Learn React Drag And Drop </Link>
    </StyledApp>
  );
}
