import Button from "../Components/Button";
import LinkTree from "../Components/LinkTree";
import Link from "next/link";
import SignInBtn from "./SignInBtn";

export default function NextAuth() {
  return (
    <div className="flex-col items-center gap-2">
      <LinkTree>
        <Link href="/NextAuth/Protected">NextAuth</Link>
        <Link href="/NextAuth/Protected">NextAuth</Link>
      </LinkTree>
      <SignInBtn />
    </div>
  );
}
