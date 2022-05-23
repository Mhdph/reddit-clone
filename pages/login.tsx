import React from "react";

function login() {
  return (
    <div className="flex flex-row">
      <img
        className="h-[100vh] w-[142px]"
        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
        alt=""
      />
      <div className="w-full ml-6 mt-56">
        <h1 className="text-[18px] font-medium">Log in</h1>
        <p className="mt-2 text-xs font-medium">
          By continuing, you agree to our
          <span className="text-blue-400"> User Agreement</span> and
          <span className="text-blue-400"> Privacy Policy</span>.
        </p>
        <div className="mt-16 w-[18%]">
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border  rounded border-blue-600 hover:bg-blue-500  flex items-center w-full mt-10"
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
            aria-labelledby="email"
            type="email"
            className="bg-[#fcfcfb] mb-4 border rounded h-12 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />

          <input
            placeholder="PASSWORD"
            aria-labelledby="email"
            type="password"
            className="bg-[#fcfcfb] border rounded h-12  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
          <div className="mt-4">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2  text-sm font-semibold leading-none text-white focus:outline-none bg-[#2080c9] border rounded-md hover:bg-[#0079d3] py-3 w-full"
            >
              LOG IN
            </button>
          </div>
          <p className="mt-4 text-[12px]  font-normal">
            Forgot your
            <span className="text-blue-400"> username </span> or
            <span className="text-blue-400"> password</span>
          </p>
          <p className="mt-4 text-[12px] font-normal">
            New to Reddit?
            <span className="text-blue-600 font-bold"> SIGN UP</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
