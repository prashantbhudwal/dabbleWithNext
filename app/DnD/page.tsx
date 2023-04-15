import Link from "next/link";
import LinkTree from "@/app/Components/LinkTree";

export default function DnD() {
  return (
    <LinkTree>
      <Link href="/DnD/ExampleApp/"> DND Example </Link>
      <Link href="/DnD/SimpleDND/"> Simple DND</Link>
    </LinkTree>
  );
}
