"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Logout, Setting2 } from "iconsax-react";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "My Projects", path: "/projects" },
    { name: "My Products", path: "/products" },
    { name: "My configurator", path: "/config" },
    { name: "3D Library", path: "/library" },
    { name: "Templates", path: "/templates" },
  ];
  const path = usePathname();

  return (
    <div className="h-[100vh] w-[260px] rounded-e-[10px] bg-surfaceTeal flex flex-col justify-between pl-10 py-10 pb-20">
      <div className="flex flex-col gap-32">
        <Image src="Logo.svg" height={30} width={135} alt="The Mashroom Logo" />
        <ul className="flex flex-col gap-4 w-fit">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className={
                  item.path === "/"
                    ? "bg-primary text-white my-2 pl-4 py-2 pr-6 w-full rounded cursor-pointer"
                    : "pl-4 pr-6 w-full rounded cursor-pointer hover:text-primary"
                }
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center px-4 cursor-pointer hover:text-primary">
          <Setting2 size="24" />
          <h3>Settings</h3>
        </div>
        <div className="flex gap-4 items-center px-4 cursor-pointer text-red-500 hover:text-red-300">
          <Logout size="24" />
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}
