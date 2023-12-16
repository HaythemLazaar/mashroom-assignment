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
            <div className="flex min-h-screen flex-col items-center mt-[91.2px] pb-10 px-5 w-full ml-[260px]">
                {children}
            </div>
        </main>
    );
}
