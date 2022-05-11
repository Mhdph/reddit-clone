import React from "react";
import { FaSearch } from "react-icons/fa";
type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className="flex grow ml-2">
      <FaSearch className="w-3 text-gray-500  h-8 absolute ml-3 pointer-events-none" />
      <input
        className="grow pr-3 pl-8 py-2 text-xs rounded-lg text-gray-500 hover:bg-white hover:border-2 border-solid border-blue-400 focus:outline-none focus:border-2 focus:border-solid focus:border-r-blue-400"
        type="search"
        name="search"
        placeholder="Search Reddit"
      />
    </div>
  );
};
export default SearchInput;
