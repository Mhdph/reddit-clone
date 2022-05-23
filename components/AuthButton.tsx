import React from "react";

const AuthButton: React.FC = () => {
  return (
    <>
      <button
        type="button"
        className="py-2 px-3 ml-1  bg-white text-blue-400 border border-solid border-blue-400 text-center text-[10px] font-semibold cursor-pointer rounded-full "
      >
        <a href="/login">Login</a>
      </button>

      <button
        type="button"
        className="py-2 px-3 ml-1  bg-blue-400 hover:bg-blue-600  text-white  text-center text-[10px] font-semibold  cursor-pointer rounded-full "
      >
        <a href="/register">Sign Up</a>
      </button>
    </>
  );
};
export default AuthButton;
