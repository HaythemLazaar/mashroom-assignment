"use client";
import { usePathname } from "next/navigation";
import { ArrowDown2, ArrowUp2, Logout, Setting2 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeNavTab, setActiveTab] = useState<string | null>(null);
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "My Orders", path: "/orders" },
    {
      name: "My Projects", children: [
        { name: "Files", path: "/projects/files" },
        { name: "Uploads", path: "/projects/uploads" },
      ]
    },
    {
      name: "My Products", children: [
        { name: "3D Configurator", path: "/products/3d-configurator" },
        { name: "3D Scene Config", path: "/3d-scene-config" },
        { name: "MashMyRoom", path: "/products/mash-my-room" },
        { name: "AI Stylist", path: "/products/ai-stylist" },
      ]
    },
    {
      name: "3D Library", children: [
        { name: "Templates", path: "/templates" },
        { name: "Props", path: "/props" },
      ]
    },
    { name: "Tutorials", path: "/tutorials" },
  ];
  const path = usePathname();
  useEffect(() => {
    navItems.some((item) => {
      if(item.children && item.children.filter((child) => child.path === path).length > 0) setActiveTab(item.name)
    })
  }, [])

  return (
    <div className="h-[calc(100vh-92px)] w-[260px] rounded-[10px] bg-surfaceTeal flex flex-col justify-between px-10 py-10 pb-10 fixed bottom-0">
      <div className="flex flex-col gap-20">
        <ul className="flex flex-col gap-2 w-full">
          {navItems.map((item) => {
            if (item.path) return (
              <li
                key={item.name}
                className={
                  item.path === path
                    ? "bg-primary text-white pl-4 py-2 pr-6 w-full rounded cursor-pointer"
                    : "pl-4 py-2 pr-6 w-full rounded cursor-pointer hover:text-primary"
                }
              >
                <Link href={item.path} className="block w-full" onClick={() => setActiveTab(null)}>{item.name}</Link>
              </li>
            );
            else if (item.children) return (
              <li
                key={item.name}
                className="flex flex-col gap-2"
              >
                <button
                  onClick={() => { if (activeNavTab !== item.name) setActiveTab(item.name); else setActiveTab(null); }}
                  className={`text-left flex justify-between items-center
                    ${item.name === activeNavTab
                      ? "bg-primary text-white pl-4 py-2 pr-4 w-full rounded cursor-pointer"
                      : "pl-4 py-2 pr-4 w-full rounded cursor-pointer hover:text-primary"}`}
                >
                  {item.name}
                  {activeNavTab === item.name ?
                    <ArrowUp2
                      size="14"
                      color="white"
                    />
                    :
                    <ArrowDown2
                      size="14"
                      color="black"
                      className="hover:text-primary"
                    />}
                </button>
                <div className="flex flex-col gap-[2px] relative">
                  <div className="h-full w-[3px] rounded-xl opacity-50 bg-primary absolute left-1"></div>
                  {
                    (activeNavTab === item.name || item.children.filter((link) => link.path === path).length > 0) && item.children.map((childItem) => {
                      if (childItem.path) return (
                        <div
                          key={childItem.name}
                          className="pl-4 text-sm"
                        >
                          <Link href={childItem.path} className={`block w-full ${childItem.path === path
                            ? "bg-primary text-white pl-4 py-2 pr-6 w-full rounded cursor-pointer"
                            : "pl-4 py-2 pr-6 w-full rounded cursor-pointer hover:text-primary"}`}>{childItem.name}</Link>
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
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center px-4 cursor-pointer hover:text-primary">
          <Setting2 size="24" />
          <h3>Settings</h3>
        </div>
        <Link href="/" className="block">
          <div className="flex gap-4 items-center px-4 cursor-pointer text-red-500 hover:text-red-300">
            <Logout size="24" />
            <h3>Logout</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
