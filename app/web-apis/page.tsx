import LinkTree from "@/app/Components/LinkTree";
import { nanoid } from "nanoid";
import Link from "next/link";

const routes = [{ name: "history", path: "/web-apis/history" }];

export default function WebAPIs() {
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
