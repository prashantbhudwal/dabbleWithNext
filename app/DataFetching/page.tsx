import Link from "next/link";

function DataFetching() {
  return (
    <div className="flex flex-col gap-2 text-teal-700 underline">
      <Link href="/DataFetching/useEffect/"> useEffect </Link>
      <Link href="/DataFetching/SSRServerComp/"> SSR Server Component </Link>
      <Link href="/DataFetching/SSRServerCompWithMutation/">
        SSR Server Component with Mutation
      </Link>
    </div>
  );
}

export default DataFetching;
