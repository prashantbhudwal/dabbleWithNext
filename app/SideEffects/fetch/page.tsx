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

export default function Fetch() {
  console.log("first line of component");
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [isFetched]);

  return (
    <Container>
      <button onClick={() => setIsFetched((prevIsFetched) => !prevIsFetched)}>
        Fetch a Character
      </button>
      <ul>
        <li>Name: {data.name}</li>
        <li>Height: {data.height}</li>
        <li>Mass: {data.mass}</li>
        <li>Hair Color: {data.hair_color}</li>
      </ul>
    </Container>
  );
}
