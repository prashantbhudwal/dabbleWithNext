import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
import Link from "next/link";

export const RedirectAPI = () => {
  const headersList = headers();
  const referer = headersList.get("referer") ?? "";
  return (
    <>
      <h1>Redirect API</h1>
      <Link href={referer}>
        <Button>Back</Button>
      </Link>
    </>
  );
};
