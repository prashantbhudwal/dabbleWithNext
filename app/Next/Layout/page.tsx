import Link from "next/link";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col gap-3 text-blue-500 underline">
        <Link href="/Next/Layout/Basic"> Using layout.tsx</Link>
        {/* <Link href="/Next/Routing">Routing</Link>
        <Link href="/Next/Layout">Layout</Link> */}
      </div>
    </>
  );
}
