import LinkTree from "@/app/Components/LinkTree";
import Link from "next/link";
export default function SupabaseDb() {
  return (
    <LinkTree>
      <Link href="/Supabase/Db/ExampleOne"> Example One </Link>
      <Link href="/Supabase/Db/ExampleTwo"> Example Two </Link>
    </LinkTree>
  );
}
