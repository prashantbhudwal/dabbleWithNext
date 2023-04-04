import LinkTree from "@/app/Components/LinkTree";
import Link from "next/link";
export default function SupabaseAuth() {
  return (
    <LinkTree>
      <Link href="/Supabase/Auth/ExampleOne"> Example One </Link>
      <Link href="/Supabase/Auth/ExampleTwo"> Example Two </Link>
    </LinkTree>
  );
}
