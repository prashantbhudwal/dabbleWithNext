"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  gap: 1em;
`;

interface Data {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

export default function Fetch() {
  console.log("first line of component");
  const [randomCharacter, setRandomCharacter] = useState(1);
  const [data, setData] = useState<Data>({
    name: "Loading...",
    height: "Loading...",
    mass: "Loading...",
    hair_color: "Loading...",
  });

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${randomCharacter}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [randomCharacter]);

  const getRandomCharacter = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setRandomCharacter(randomNumber);
  };

  return (
    <Container>
      <button onClick={getRandomCharacter}>Fetch a Character</button>
      <ul>
        <li>Name: {data.name}</li>
        <li>Height: {data.height}</li>
        <li>Mass: {data.mass}</li>
        <li>Hair Color: {data.hair_color}</li>
      </ul>
    </Container>
  );
}
