import LinkTree from "@/app/Components/LinkTree";
import Link from "next/link";
export default function Prisma() {
  return (
    <LinkTree>
      <Link href="/Supabase/ExampleOne"> Example One</Link>
      <Link href="/Supabase/ExampleTwo"> Example Two</Link>
    </LinkTree>
  );
}
