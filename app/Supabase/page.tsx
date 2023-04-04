import LinkTree from "@/app/Components/LinkTree";
import Link from "next/link";
export default function Supabase() {
  return (
    <LinkTree>
      <Link href="/Supabase/Auth"> Supabase Auth </Link>
      <Link href="/Supabase/Database"> Supabase Db</Link>
    </LinkTree>
  );
}
