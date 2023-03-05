import Link from "next/link";
export default function SWR() {
  return (
    <>
      <h1>Learn SWR</h1>
      <div>
        <Link href="/SWR/basics/"> Basics </Link>
        <Link href="/SWR/fetchAPIRoute/"> Fetch from a self hosted API </Link>
      </div>
    </>
  );
}
