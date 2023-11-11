import Sidebar from "@/components/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mashroom - Technical Assignment",
  description: "A takeout technical assignment provided by Haythem Lazaar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex text-text`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
