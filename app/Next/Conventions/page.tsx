import Link from "next/link";

export default function Conventions() {
  return (
    <>
      <div className="flex flex-col gap-3 text-blue-500 underline">
        <Link href="/Next/Conventions/Layout"> Layouts - layout.tsx</Link>
        <Link href="/Next/Conventions/LoadingSuspense">
          Loading state with Suspense - loading.tsx
        </Link>
        <Link href="/Next/Conventions/ErrorBoundaries">
          Error state with ErrorBoundary - error.tsx
        </Link>
        <Link href="/Next/Conventions/NotFound"> 404 - not-found.tsx</Link>
      </div>
    </>
  );
}
