import Link from "next/link";

export default function Routing() {
  return (
    <>
      <div className="flex flex-col gap-3 underline text-blue-500">
        <Link href="/Next/Routing/Blog"> Dynamic Routes - Blog</Link>
        <Link href="/Next/Routing/DefiningRoutes">TBD</Link>
      </div>
    </>
  );
}
