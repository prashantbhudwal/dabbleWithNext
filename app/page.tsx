"use client";
import styled from "styled-components";
import Profile from "./Components/Profile";

const StyledApp = styled.main`
  background-color: #f0f0f0;
  color: #333;
  font-family: sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 1rem;
`;

export default function Home() {
  return (
    <StyledApp>
      <Profile />
    </StyledApp>
  );
}
