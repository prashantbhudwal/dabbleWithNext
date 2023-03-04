import Link from "next/link";
import StyledComponentsRegistry from "./lib/registry";
import "./global.css";

export const metadata = {
  title: "Test",
  description: "Test Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>dabbleWithNext</header>
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <footer>
          <Link href="/">Go Home</Link>
        </footer>
      </body>
    </html>
  );
}
