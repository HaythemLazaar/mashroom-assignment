import Sidebar from "@/components/navigation/sidebar";
import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/navigation/header";

export const metadata: Metadata = {
    title: "Mashroom",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Sidebar />
            <Header />
            <div className="flex min-h-screen flex-col items-center mt-[91.2px] pb-10 pr-5 w-full pl-[280px]">
                {children}
            </div>
        </main>
    );
}
