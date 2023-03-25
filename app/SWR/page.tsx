import Link from "next/link";
export default function SWR() {
  return (
    <>
      <h1>Learn SWR</h1>
      <div className="flex flex-col text-violet-500 underline">
        <Link href="/SWR/basics/"> Basics </Link>
        <Link href="/SWR/fetchAPIRoute/"> Fetch from a self hosted API </Link>
        <Link href="/SWR/postToAPIRoute/"> Post to a self hosted API </Link>
        <Link href="/SWR/mutateWithoutSWR/"> Mutate without SWR </Link>
        <Link href="/SWR/mutateWithSWR/"> Mutate with SWR mutate function</Link>
      </div>
    </>
  );
}
