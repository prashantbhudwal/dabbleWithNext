import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";

export default function TS() {
  return (
    <LinkTree>
      <Link href="/typescript/one/"> One </Link>
      <Link href="/typescript/generics/"> One </Link>
    </LinkTree>
  );
}
