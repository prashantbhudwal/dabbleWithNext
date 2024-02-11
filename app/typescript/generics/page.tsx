import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";

export default function TS() {
  return (
    <LinkTree>
      <Link href="/typescript/generics/basics"> Basics </Link>
      <Link href="/typescript/generics/constraints"> Constraints </Link>
      <Link href="/typescript/generics/interfaces"> Interfaces </Link>
      <Link href="/typescript/generics/type-guards"> Type Guards </Link>
    </LinkTree>
  );
}
