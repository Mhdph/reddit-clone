import React from "react";
import AuthButton from "./AuthButton";
import {
  UserIcon,
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <BellIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <PlusIcon className="icon" />
        <SparklesIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <UserIcon className="icon" />
      </div>
      <AuthButton />
    </>
  );
};
export default RightContent;
