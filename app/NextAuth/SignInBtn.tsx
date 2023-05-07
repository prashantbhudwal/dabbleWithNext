"use client";
import Button from "../Components/Button";
import { signIn, signOut, useSession } from "next-auth/react";
export default function SignInBtn() {
  const { data: session } = useSession();
  return session && session.user ? (
    <Button onClick={() => signOut()}>Sign Out</Button>
  ) : (
    <Button onClick={() => signIn()}>Sign In</Button>
  );
}
