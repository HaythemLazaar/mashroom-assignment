import { Notification, FilterSearch, SearchNormal1 } from "iconsax-react";
import Image from "next/image";

export default function OldHeader() {
  return (
    <div className="flex justify-between w-full py-5 z-10 pl-[280px] fixed top-0">
        <div className="flex gap-2 items-center border border-border bg-inputSurface xl:min-w-[760px] px-4 py-2 rounded-[4px]">
          <SearchNormal1 />
          <input
            className="bg-inputSurface placeholder:text-text focus-visible:outline-none w-full"
            placeholder="Search artists, projects..."
          />
          <button className="border border-border bg-inputSurface p-1 flex items-center rounded-[4px]">
            <FilterSearch />
            <h3 className="text-sm">Filter</h3>
          </button>
        </div>
      <div className="flex gap-10 items-center pr-4">
        <div className="flex gap-2 items-center">
          <Image
            src="/avatar.png"
            width={40}
            height={40}
            alt="Mashroom user image"
          />
          <div className="flex flex-col text-sm">
            <h3 className="font-[600]">Karim Benzema</h3>
            <h3 className="text-subtitle font-[500]">Admin</h3>
          </div>
        </div>
        <div className="rounded-[100%] w-[40px] h-[40px] flex justify-center items-center bg-surfacegray">
          <Notification />
        </div>
      </div>
    </div>
  );
}
