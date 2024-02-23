import LinkTree from "@/app/Components/LinkTree";
import { nanoid } from "nanoid";
import Link from "next/link";

const routes = [{ name: "grid", path: "/css/tailwind/grid" }];

export default function CSS() {
  return (
    <LinkTree>
      {routes.map((route, index) => {
        return (
          <Link href={route.path} key={nanoid(5)}>
            {route.name}
          </Link>
        );
      })}
    </LinkTree>
  );
}
