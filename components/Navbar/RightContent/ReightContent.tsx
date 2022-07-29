import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import ActionIcons from "./Icons";
import UserMenu from "./UserMenu";

type ReightContentProps = {
  user?: User | null;
};

const ReightContent: React.FC<ReightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <ActionIcons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default ReightContent;
