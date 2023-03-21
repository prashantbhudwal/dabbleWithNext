import Link from "next/link";

export default function Next() {
  return (
    <>
      <div className="flex flex-col gap-3 underline text-blue-500">
        <Link href="/Next/DataFetching"> Data Fetching </Link>
        <Link href="/Next/Routing">Routing</Link>
      </div>
    </>
  );
}
