import Link from "next/link";
import StyledComponentsRegistry from "./lib/registry";
import "./global.css";
import Providers from "./state/providers";
import AuthProvider from "./Providers/AuthProvider";
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
