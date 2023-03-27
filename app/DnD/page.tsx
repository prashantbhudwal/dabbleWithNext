import Link from "next/link";
export default function DnD() {
  return (
    <>
      <h1>Learn React DND</h1>
      <div className="flex flex-col text-violet-500 underline">
        <Link href="/DnD/ExampleApp/"> DND Example </Link>
      </div>
    </>
  );
}
