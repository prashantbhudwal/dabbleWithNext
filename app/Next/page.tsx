import Link from "next/link";

export default function Next() {
  return (
    <>
      <div className="flex flex-col gap-3 text-blue-500 underline">
        <Link href="/Next/Conventions">Conventions</Link>
        <Link href="/Next/DataFetching"> Data Fetching </Link>
        <Link href="/Next/Routing">Routing</Link>
      </div>
    </>
  );
}
