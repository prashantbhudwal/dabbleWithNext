import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";
export default function UseEffect() {
  return (
    <LinkTree>
      <Link href="/React/useEffect/value"> With Value Dependency</Link>
      <Link href="/React/useEffect/reference"> With Reference Dependency </Link>
    </LinkTree>
  );
}
