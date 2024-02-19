import Link from "next/link";
import LinkTree from "../Components/LinkTree";
export default function React() {
  return (
    <LinkTree>
      <Link href="/React/State/"> State </Link>
      <Link href="/React/SideEffects/"> Side Effects </Link>
      <Link href="/React/useEffect/"> UseEffect </Link>
      <Link href="/React/useRef/"> UseRef </Link>
      <Link href="/React/solid-components/"> Solid Components </Link>
    </LinkTree>
  );
}
