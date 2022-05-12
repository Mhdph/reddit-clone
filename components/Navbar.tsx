import React from "react";
import RightContent from "./RightContent";
import SearchInput from "./SearchInput";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex bg-white h-11 py-1.5 px-3 ">
      <div className="flex items-center">
        <img src="/images/redditFace.svg" className="h-[30px]" />
        <img src="/images/redditText.svg" className="hidden md:inline h-9" />
      </div>
      <SearchInput />
      <RightContent />
    </div>
  );
};
export default Navbar;
