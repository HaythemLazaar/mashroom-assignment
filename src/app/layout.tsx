import Sidebar from "@/components/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/header";

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
        <main className="flex min-h-screen flex-col items-center pt-20 pb-10 px-8 w-full ml-[260px]">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
