"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ToggleIt = ({
  children,
  btn = "Toggle",
}: {
  children: React.ReactNode;
  btn?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row space-x-2">
      <Button onClick={() => setShow(!show)}>{btn}</Button>
      {show && children}
    </div>
  );
};
