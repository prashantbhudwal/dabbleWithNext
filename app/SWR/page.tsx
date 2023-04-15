import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";

export default function SWR() {
  return (
    <LinkTree>
      <Link href="/SWR/basics/"> Basics </Link>
      <Link href="/SWR/fetchAPIRoute/"> Fetch from a self hosted API </Link>
      <Link href="/SWR/postToAPIRoute/"> Post to a self hosted API </Link>
      <Link href="/SWR/mutateWithoutSWR/"> Mutate without SWR </Link>
      <Link href="/SWR/mutateWithSWR/"> Mutate with SWR mutate function</Link>
    </LinkTree>
  );
}
