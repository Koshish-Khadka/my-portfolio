import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Ovo } from "next/font/google";
import { ThemeProvider } from "../components/ui/theme-provider";
import { UserProvider } from "../context/usercontext";
import ThemeWrapper from "../components/ui/ThemeWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Koshish | Personal Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${ovo.className} antialiased relative z-10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper>
            <UserProvider>{children}</UserProvider>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
