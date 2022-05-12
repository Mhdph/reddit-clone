import React from "react";
import AuthButton from "./AuthButton";

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <AuthButton />
      </div>
    </>
  );
};
export default RightContent;
