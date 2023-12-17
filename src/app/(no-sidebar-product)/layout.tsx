import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/navigation/header";

export const metadata: Metadata = {
    title: "Mashroom - 3D Scene Config",
    description: "3D Scene Configurator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="max-w-[100vw]">
            <Header />
            <div className="min-h-screen mt-[92px] pb-10 w-full">
                {children}
            </div>
        </main>
    );
}
