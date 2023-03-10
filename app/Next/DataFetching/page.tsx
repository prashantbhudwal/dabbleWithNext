import Link from "next/link";

function DataFetching() {
  return (
    <div className="flex flex-col gap-2 text-teal-700 underline">
      <Link href="/Next/DataFetching/useEffect/"> useEffect </Link>
      <Link href="/Next/DataFetching/SSRServerComp/">SSR Server Component</Link>
      <Link href="/Next/DataFetching/SSRServerCompWithMutation/">
        SSR Server Component with Mutation
      </Link>
    </div>
  );
}

export default DataFetching;
