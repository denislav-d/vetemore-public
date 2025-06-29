import "./globals.scss";
import type { Metadata } from "next";
import { Work_Sans } from "@next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vetemòre",
  description: "Vetemòre - More to fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>{children}</body>
    </html>
  );
}
