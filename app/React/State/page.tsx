import Link from "next/link";
import Test from "./ReactingToInput/page";

export default function State() {
  return (
    <>
      <div className="flex flex-col gap-3 underline text-blue-500">
        <Link href="/React/State/ReactingToInput"> Reacting To Input </Link>
        <Link href="/React/State/ReactingToInputChTwo">
          Reacting To Input - Challenge Two
        </Link>
      </div>
    </>
  );
}
