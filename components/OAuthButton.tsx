import React from "react";

type OAuthButtonProps = {};

const OAuthButton: React.FC<OAuthButtonProps> = () => {
  return (
    <div>
      <div className="flex gap-4 item-center">
        <button
          type="button"
          className="py-2 px-4 mb-2 flex justify-center items-center  bg-white hover:bg-gray-100 text-black w-full  text-center text-sm
           shadow-md rounded-lg "
        >
          <img src="/images/googlelogo.png" className="h-4 mr-3" />
          Continue With Google
        </button>
      </div>
      <div className="flex gap-4 item-center">
        <button
          type="button"
          className="py-2 px-4 mb-2 flex justify-center items-center  bg-white hover:bg-gray-100 text-black w-full  text-center text-sm
           shadow-md rounded-lg "
        >
          Some Other Provider
        </button>
      </div>
    </div>
  );
};
export default OAuthButton;
