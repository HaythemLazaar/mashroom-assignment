"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowDown2, ArrowUp2, Logout, Setting2 } from "iconsax-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function LibrarySidebar() {
    const [activeNavTab, setActiveTab] = useState<string | null>(null);
    const router = useRouter()
    const path = usePathname();
    const queryParams = useSearchParams();
    const template = queryParams.get('template');
    // const prop = queryParams.get('prop');

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(queryParams)
            params.set(name, value)

            return params.toString()
        },
        [queryParams]
    )

    useEffect(() => {
        navItems.some((item) => {
            if (item.children.filter((child) => child.param === template).length > 0) setActiveTab(item.name)
            if (template === '') setActiveTab(null);
        })
    }, [])

    return (
        <div className="h-[calc(100vh-92px)] w-[260px] rounded-[10px] bg-surfaceTeal flex flex-col justify-between px-10 py-10 pb-10 fixed bottom-0">
            <div className="flex flex-col gap-20">
                <ul className="flex flex-col gap-2 w-full">
                    <li className="flex flex-col gap-2">
                        <div className="bg-surfaceAmber text-white pl-4 py-2 pr-6 w-full rounded cursor-pointer">
                            3D Library
                        </div>
                        <div
                            className="pl-4 text-sm"
                        >
                            <Link
                                href="/templates"
                                onClick={() => {
                                    if (path !== '/templates') setActiveTab(null);
                                }}
                                className={`block w-full 
                                                    ${path === '/templates'
                                        ? "bg-primary text-white pl-4 py-2 pr-6 w-full rounded cursor-pointer"
                                        : "pl-4 py-2 pr-6 w-full rounded cursor-pointer hover:text-primary"
                                    }`}
                            >
                                Templates
                            </Link>
                        </div>
                        <div
                            className="pl-4 text-sm"
                        >
                            <Link
                                href="/props"
                                onClick={() => {
                                    if (path !== '/props') setActiveTab(null);
                                }}
                                className={`block w-full 
                                                    ${path === '/props'
                                        ? "bg-primary text-white pl-4 py-2 pr-6 w-full rounded cursor-pointer"
                                        : "pl-4 py-2 pr-6 w-full rounded cursor-pointer hover:text-primary"
                                    }`}
                            >
                                Props
                            </Link>
                        </div>
                    </li>
                    {navItems.map((item) => {
                        return (
                            <li
                                key={item.name}
                                className="flex flex-col gap-2"
                            >
                                <button
                                    onClick={() => { if (activeNavTab !== item.name) setActiveTab(item.name); else if (!(item.children.filter((child) => child.param === template).length > 0)) setActiveTab(null); }}
                                    className={`text-left flex justify-between items-center
                                            ${item.name === activeNavTab
                                            ? "bg-primary text-white pl-4 py-2 pr-4 w-full rounded cursor-pointer"
                                            : "pl-4 py-2 pr-4 w-full rounded cursor-pointer hover:bg-surfacegray"}`}
                                >
                                    {item.name}
                                    {activeNavTab === item.name ?
                                        <ArrowUp2
                                            size="14"
                                            color="white"
                                            className="transition-all"
                                        />
                                        :
                                        <ArrowDown2
                                            size="14"
                                            color="black"
                                            className="transition-all"
                                        />}
                                </button>
                                <div className="flex flex-col gap-[2px] relative transition-all">
                                    <div className="h-full w-[3px] rounded-xl opacity-50 bg-primary absolute left-1"></div>
                                    {
                                        (activeNavTab === item.name || item.children.filter((link) => link.param === template).length > 0) && item.children.map((childItem) => {
                                            if (childItem.param) return (
                                                <div
                                                    key={childItem.name}
                                                    className="pl-4 text-sm transition-all"
                                                >
                                                    <Link href={path + '?' + createQueryString('template', childItem.param)} className={`block w-full ${childItem.param === template
                                                        ? "bg-primary text-white pl-4 py-2 pr-6 w-full rounded cursor-pointer"
                                                        : "pl-4 py-2 pr-6 w-full rounded cursor-pointer hover:text-primary transition-all"}`}>{childItem.name}</Link>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}


const navItems = [
    {
        name: "Brands", children: [
            { name: "Files", param: "mashroom" },
            { name: "3D Library", param: "3d-library" },
            { name: "Textures", param: "textures" },
            { name: "Props", param: "props" },

        ]
    },
    {
        name: "Space", children: [
            { name: "Livingroom", param: "livingroom" },
            { name: "Kitchen", param: "kitchen" },
            { name: "bathroom", param: "bathroom" },
            { name: "Office", param: "office" },
            { name: "Corporate", param: "corporate" },
        ]
    },
    {
        name: "Style", children: [
            { name: "Modern", param: "modern" },
            { name: "Electic", param: "electic" },
            { name: "Boho Chic", param: "boho-chic" },
            { name: "Minimalistic", param: "minimalistic" },
            { name: "Scandinivian", param: "scandinivian" },
            { name: "Japandi", param: "Japandi" },
        ]
    },
];