import React, { useState } from "react";
import { auth } from "../firebase/clientApp";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {email}</p>
      </div>
    );
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-row">
      <img
        className="h-[100vh] w-[142px]"
        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
        alt=""
      />
      <div className="w-full ml-6 mt-56">
        <h1 className="text-[18px] font-medium">Sign up</h1>
        <p className="mt-2 text-xs font-medium w-[18%]">
          By continuing, you are setting up a Reddit <br /> account and agree to
          our
          <span className="text-blue-400"> User Agreement</span> and <br />
          <span className="text-blue-400"> Privacy Policy</span>.
        </p>

        <div className="mt-16 w-[18%]">
          <div className="flex mb-3">
            <input type="checkbox" />
            <p className="text-xs ml-2">
              {" "}
              I agree to get emails about cool stuff on Reddit{" "}
            </p>
          </div>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border  rounded border-blue-600 hover:bg-blue-500  flex items-center w-full"
          >
            <img
              className="hover:bg-white "
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-semibold ml-8 tracking-wider hover:text-white text-blue-600">
              Continue with Google
            </p>
          </button>
          <button
            aria-label="Continue with github"
            role="button"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded border-blue-600 hover:bg-blue-500 flex items-center w-full mt-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
              alt="github"
            />
            <p className="text-base font-semibold ml-8 hover:text-white tracking-wider text-blue-600">
              Continue with Github
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-sm font-base leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400 / " />
          </div>

          <input
            placeholder="EMAIL"
            type="email"
            className="bg-[#fcfcfb] mb-4 border rounded h-12 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="PASSWORD"
            type="password"
            className="bg-[#fcfcfb] border rounded h-12  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-4">
            <button
              onClick={() => createUserWithEmailAndPassword(email, password)}
              type="submit"
              role="button"
              className="focus:ring-2 focus:ring-offset-2  text-sm font-semibold leading-none text-white focus:outline-none bg-[#2080c9] border rounded-md hover:bg-[#0079d3] py-3 w-full"
            >
              SIGN UP
            </button>
          </div>

          <p className="mt-4 text-[12px] font-normal">
            Already a redditor?
            <span className="text-blue-600 font-bold"> LOG IN</span>
          </p>
        </div>
      </div>
    </form>
  );
}

export default register;
