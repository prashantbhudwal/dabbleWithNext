import { ReactNode } from "react";
import { AI } from "./init";
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AI>{children}</AI>
    </div>
  );
};

export default Layout;
export const runtime = "edge";
