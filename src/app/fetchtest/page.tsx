export default async function FetchTest() {
  const response = await fetch("http://localhost:3000/api/hello/");
  if (!response.ok) {
    throw new Error("Failed");
  }
  const data = await response.json();

  return <h1>{JSON.stringify(data)}</h1>;
}
