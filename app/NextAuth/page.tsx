import LinkTree from "../Components/LinkTree";
import Link from "next/link";

export default function NextAuth() {
  return (
    <LinkTree>
      <Link href="/NextAuth/Protected">NextAuth</Link>
      <Link href="/NextAuth/Protected">NextAuth</Link>
    </LinkTree>
  );
}
