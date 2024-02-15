import Link from "next/link";
import StyledComponentsRegistry from "./lib/registry";
import "./global.css";
import Providers from "./providers";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import AuthProvider from "./Providers/AuthProvider";
export const metadata = {
  title: "Test",
  description: "Test Description",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <Providers>
            <header>
              {" "}
              <Link href="/">dabbleWihNext</Link>
            </header>
            <main>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </main>
            <footer>
              <Link href="/">Go Home</Link>
            </footer>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
