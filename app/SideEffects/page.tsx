import Link from "next/link";
export default function SideEffects() {
  return (
    <>
      <h1>Learn SideEffects</h1>
      <div>
        <Link href="/SideEffects/basics/"> Basics </Link>
      </div>
      <div>
        <Link href="/SideEffects/fetch/"> Fetch </Link>
      </div>
    </>
  );
}
