import { useSearch } from "@/app/zustand/searchStatus";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  const { change, status } = useSearch();
  return (
    <search
      className={`size-full h-10 lg:mx-8 ${
        status ? "drop-shadow-focus" : ""
      } flex justify-end border items-center rounded-md gap-x-1 bg-white border-black/20`}
    >
      <input
        onFocus={() => {
          change(true);
        }}
        onBlur={() => {
          change(false);
        }}
        type="text"
        placeholder="Czego szukasz?"
        className="w-full rounded-md focus:outline-none pl-5 placeholder:text-sm "
      />
      <div className="w-[1px] h-6 bg-black/20" />
      <div className="h-full py-[2px]">
        <div className="rounded-md flex hover:bg-hover size-full px-3 items-center cursor-pointer">
          <p className="text-sm">Wszędzie</p>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="bg-[#444444] flex items-center justify-center h-full w-24 rounded-md hover:bg-[#1a1a1a] transition-all cursor-pointer">
        <IoSearchSharp className="size-6 text-white" />
      </div>
    </search>
  );
}
