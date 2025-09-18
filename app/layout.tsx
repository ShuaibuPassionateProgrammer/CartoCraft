import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CartoCraft - AI-Powered Creative Tools",
  description: "Empowering creativity through advanced AI generation tools. Create stunning images, videos, and real-time content with CartoCraft.",
  authors: [{ name: "CartoCraft Solutions" }],
  openGraph: {
    title: "CartoCraft - AI-Powered Creative Tools",
    description: "Empowering creativity through advanced AI generation tools. Create stunning images, videos, and real-time content with CartoCraft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}