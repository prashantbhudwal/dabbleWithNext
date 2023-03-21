import Link from "next/link";
export default function DefiningRoutes() {
  return (
    <>
      Blog
      <div className="flex flex-col gap-3 underline text-blue-500">
        <Link href="/Next/Routing/Blog/Posts/post-one">
          Post One: Subheading
        </Link>
        <Link href="/Next/Routing/Blog/Posts/post-two">
          Post Two: Subheading
        </Link>
      </div>
    </>
  );
}
