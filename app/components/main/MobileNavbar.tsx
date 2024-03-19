"use client";
import Image from "next/image";
import Menu from "../sub/Menu";
import RightTabs from "../sub/RightTabs";
import Search from "../sub/Search";
import { RxHamburgerMenu } from "react-icons/rx";
export default function MobileNavbar() {
  return (
    <header className="fixed bg-white top-0 w-full flex lg:hidden flex-col items-center justify-center z-30 pb-3 drop-shadow-lg">
      <div className="bg-white flex-col max-w-[1440px] size-full flex items-center justify-start overflow-x-hidden px-3 md:px-6 xl:px-16 2xl:px-0">
        <div className="flex size-full items-center py-4">
          <div className="flex items-center justify-start size-full">
            <div className="relative h-8 md:h-10 md:aspect-[256/45] aspect-[11/3]">
              <Image
                src={
                  "https://assets.x-kom.pl/public-spa/xkom/064948e3bac8c6d5.svg"
                }
                alt="logo"
                fill
              />
            </div>
            <RightTabs />
          </div>
        </div>
        <div className="flex gap-x-1 w-full items-center justify-center">
          <div className="size-10 flex flex-col items-center justify-center cursor-pointer">
            <RxHamburgerMenu className="size-6" />
            <p className="text-xs">Menu</p>
          </div>
          <Search />
        </div>
      </div>
    </header>
  );
}
