import Link from "next/link";
export default function SWR() {
  return (
    <>
      <h1>Learn SWR</h1>
      <div className="underline text-violet-500 flex flex-col">
        <Link href="/SWR/basics/"> Basics </Link>
        <Link href="/SWR/fetchAPIRoute/"> Fetch from a self hosted API </Link>
        <Link href="/SWR/postToAPIRoute/"> Post to a self hosted API </Link>
      </div>
    </>
  );
}
