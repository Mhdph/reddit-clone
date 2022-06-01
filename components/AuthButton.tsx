import Link from "next/link";
import React from "react";

const AuthButton: React.FC = () => {
  return (
    <div className="hidden md:inline">
      <Link href="/login">
        <a>
          <button
            type="button"
            className="py-2 px-6 ml-1  bg-white text-blue-400 border border-solid border-blue-400 text-center text-[10px] font-semibold cursor-pointer rounded-full "
          >
            Login
          </button>
        </a>
      </Link>
      <Link href="/register">
        <a>
          <button
            type="button"
            className="py-2 px-6 ml-1  bg-[#0079d3] hover:bg-[#1483D6] text-white  text-center text-[10px] font-semibold  cursor-pointer rounded-full "
          >
            SignUp
          </button>
        </a>
      </Link>
    </div>
  );
};
export default AuthButton;
