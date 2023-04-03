import Link from "next/link";
import LinkTree from "../Components/LinkTree";
export default function React() {
  return (
    <LinkTree>
      <div>
        <Link href="/React/State/"> State </Link>
      </div>
      <div>
        <Link href="/React/SideEffects/"> Side Effects </Link>
      </div>
      <div>
        <Link href="/React/useEffect/"> UseEffect </Link>
      </div>
      <div>
        <Link href="/React/useRef/"> UseRef </Link>
      </div>
    </LinkTree>
  );
}
