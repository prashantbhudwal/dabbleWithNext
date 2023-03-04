"use client";
import Link from "next/link";
import styled from "styled-components";
import Profile from "./Components/Profile";
import SideEffects from "./SideEffects/page";

const StyledApp = styled.main`
  font-family: sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 1rem;
`;

export default function Home() {
  return (
    <StyledApp>
      <Link href="/SideEffects"> Side Effects </Link>
    </StyledApp>
  );
}
