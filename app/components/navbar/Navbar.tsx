"use client";
import Image from "next/image";
import RightTabs from "./components/RightTabs";
import Search from "./components/Search";
import Menu from "./components/Menu";
export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex flex-col items-center justify-center">
      <div className="bg-white h-[72px] max-w-[1440px] w-full flex items-center justify-start overflow-x-hidden px-3 md:px-6 xl:px-16 2xl:px-0">
        <div className="flex size-full items-center py-4">
          <div className="flex items-center justify-start">
            <div className="relative h-8 md:h-10 md:aspect-[256/45] aspect-[11/3]">
              <Image
                src={
                  "https://assets.x-kom.pl/public-spa/xkom/7cbf82dd32ab7e88.svg"
                }
                alt="logo"
                fill
                className="md:block hidden"
              />
              <Image
                src={
                  "https://assets.x-kom.pl/public-spa/xkom/064948e3bac8c6d5.svg"
                }
                alt="logo"
                fill
                className="block md:hidden"
              />
            </div>
          </div>
          <Search />
        </div>
        <RightTabs />
      </div>
      <Menu />
    </header>
  );
}
