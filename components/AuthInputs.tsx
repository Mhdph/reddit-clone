import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import Login from "./Login";

type AuthInputsProps = {};
// const modalState = useRecoilValue(authModalState);

const AuthInputs: React.FC<AuthInputsProps> = () => {
  return (
    <div className="flex flex-col align-center mt-4 w-full">
      {/* {modalState.view === "login" && <Login />} */}
      <Login />
    </div>
  );
};
export default AuthInputs;
