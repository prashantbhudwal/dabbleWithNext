import Link from "next/link";
export default function UseEffect() {
  return (
    <>
      <div>
        <Link href="/React/useEffect/value"> With Value Dependency</Link>
      </div>
      <div>
        <Link href="/React/useEffect/reference">
          {" "}
          With Reference Dependency{" "}
        </Link>
      </div>
    </>
  );
}
