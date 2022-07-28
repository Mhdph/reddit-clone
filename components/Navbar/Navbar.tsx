import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import ReightContent from "./RightContent/ReightContent";
import SearchInput from "./SearchInput";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user] = useAuthState(auth);

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="reddit logo" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit text"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <ReightContent user={user} />
    </Flex>
  );
};
export default Navbar;
