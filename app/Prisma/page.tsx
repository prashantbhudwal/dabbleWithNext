import LinkTree from "@/app/Components/LinkTree";
import Link from "next/link";
export default function Prisma() {
  return (
    <LinkTree>
      <Link href="/Prisma/ReadingData"> Reading Data from database</Link>
      <Link href="/Prisma/WritingData"> Writing Data to database</Link>
    </LinkTree>
  );
}
