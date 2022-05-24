import Image from "next/image";
import React from "react";

import { ChevronDownIcon, HomeIcon } from "@heroicons/react/solid";

import SearchInput from "./SearchInput";
import RightContent from "./RightContent";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https://links.papareact.com/fqy"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5 hidden md:inline" />
        <p className="ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5 hidden md:inline" />
      </div>
      <SearchInput />
      <RightContent />
    </div>
  );
};
export default Navbar;
