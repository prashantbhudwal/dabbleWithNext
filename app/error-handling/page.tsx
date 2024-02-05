import Link from "next/link";

function ErrorHandling() {
  return (
    <div className="flex flex-col gap-2 text-teal-700 underline">
      <Link href="/Next/error-handling/vanilla/"> Vanilla Error Handling </Link>
      <Link href="/Next/error-handling/withFP/"> With fp-ts </Link>
    </div>
  );
}

export default ErrorHandling;
