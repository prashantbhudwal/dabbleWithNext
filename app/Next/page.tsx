import Link from "next/link";
import LinkTree from "../Components/LinkTree";

export default function Next() {
  return (
    <LinkTree>
      <Link href="/Next/Conventions">Conventions</Link>
      <Link href="/Next/DataFetching"> Data Fetching </Link>
      <Link href="/Next/Routing">Routing</Link>
      <Link href="/Next/ReadableStreams">Readable Streams</Link>
      <Link href="/Next/Caching">Caching</Link>
    </LinkTree>
  );
}
