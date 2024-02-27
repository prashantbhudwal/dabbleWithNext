import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";
import * as Test from "./generics/problems";

export default function TS() {
  Test.test;
  return (
    <LinkTree>
      <Link href="/typescript/one/"> One </Link>
      <Link href="/typescript/generics/"> One </Link>
    </LinkTree>
  );
}
