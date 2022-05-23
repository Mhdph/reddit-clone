import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import Login from "./Login";
import SignUP from "./SignUp";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <div className="flex flex-col align-center mt-4 w-full">
      {modalState.view === "login" && <Login />}
      {modalState.view === "Sign Up" && <SignUP />}
    </div>
  );
};
export default AuthInputs;
