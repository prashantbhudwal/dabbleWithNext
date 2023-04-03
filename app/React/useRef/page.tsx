import LinkTree from "@/app/Components/LinkTree";
import Link from "next/link";
export default function Ref() {
  return (
    <LinkTree>
      <Link href="/React/useRef/stopwatch/"> Stopwatch </Link>
      <Link href="/React/useRef/customRef/"> Custom Ref </Link>
      <Link href="/React/useRef/chOne-chat/"> Challenge One - Chat </Link>
      <Link href="/React/useRef/chTwo-toggle/">
        Challenge Two - Toggle On/Off
      </Link>
    </LinkTree>
  );
}
