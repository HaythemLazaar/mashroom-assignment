"use client";
import LibrarySidebar from "@/components/navigation/library-sidebar";
import "../../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const path = usePathname();
    return (
        <>
            <LibrarySidebar />
            <div className="pl-[280px] pr-5 pt-5 flex flex-col gap-5">
                <div className="p-1 rounded-md bg-surfacegray flex w-fit">
                    <Link
                        href="/templates"
                        className={`block px-5 py-2
                                    ${path === '/templates'
                                ? "bg-surfaceAmber rounded cursor-pointer"
                                : "rounded cursor-pointer hover:text-primary"
                            }`}
                    >
                        Templates
                    </Link>
                    <Link
                        href="/props"
                        className={`block px-5 py-2
                                    ${path === '/props'
                                ? "bg-surfaceAmber rounded cursor-pointer"
                                : "rounded cursor-pointer hover:text-primary"
                            }`}
                    >
                        Props
                    </Link>
                </div>
                {children}
            </div>
        </>
    );
}
