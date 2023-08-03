"use client";
import { trackSignOut } from "@/mixpanel/actions";
import Button from "../Components/Button";
import { signIn, signOut, useSession } from "next-auth/react";
export default function SignInBtn() {
  const { data: session } = useSession();
  const handleSignOut = () => {
    signOut();
    trackSignOut(session);
  };
  return session && session.user ? (
    <Button onClick={() => handleSignOut()}>Sign Out</Button>
  ) : (
    <Button onClick={() => signIn()}>Sign In</Button>
  );
}
