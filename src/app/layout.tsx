import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "SoftLink IT Solutions",
  description: "Modern IT Infrastructure & Technology Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProviderWrapper>
          <Navbar />

          <main className="pt-20 overflow-hidden">
            {children}
          </main>

          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}