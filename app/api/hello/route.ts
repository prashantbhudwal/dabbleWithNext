async function fetchPerson() {
  const response = await fetch(`https://swapi.dev/api/people/1`);
  const data = await response.json();
  return data;
}

export async function GET(request: Request) {
  const person = await fetchPerson();
  return new Response(`${person.name}`);
}
