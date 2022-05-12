import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import AuthModal from "./AuthModal";

const AuthButton: React.FC = () => {
  const setAuthModelState = useSetRecoilState(authModalState);
  return (
    <>
      <AuthModal />
      <button
        onClick={() => setAuthModelState({ open: true, view: "login" })}
        type="button"
        className="py-2 px-3 ml-1  bg-white text-blue-400 border border-solid border-blue-400 text-center text-[10px] font-semibold cursor-pointer rounded-full "
      >
        Login
      </button>
      <button
        onClick={() => setAuthModelState({ open: true, view: "Sign Up" })}
        type="button"
        className="py-2 px-3 ml-1  bg-blue-400 hover:bg-blue-600  text-white  text-center text-[10px] font-semibold  cursor-pointer rounded-full "
      >
        Sign Up
      </button>
    </>
  );
};
export default AuthButton;
