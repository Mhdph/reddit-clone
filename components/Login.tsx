import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white rounded-lg sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-1 sm:px-10">
          <div className="mt-2">
            <div className="w-full space-y-3">
              <div className="w-full">
                <div className=" relative ">
                  <input
                    className=" rounded-lg border border-solid border-r-gray-100  flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-300 "
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={onChange}
                    className=" rounded-lg  border border-solid border-r-gray-100 flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-300 "
                  />
                </div>
              </div>

              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    className="w-full h-9 my-1 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500  text-white  transition ease-in duration-200 text-center text-[12px] font-bold cursor-pointer rounded-full "
                    type="submit"
                  >
                    Log In
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-xs justify-center">
        <p className="mr-1">New Here?</p>
        <p
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "Sign Up" }))
          }
          className="text-blue-500 text-bold cursor-pointer"
        >
          Sign Up
        </p>
      </div>
    </form>
  );
};
export default Login;
