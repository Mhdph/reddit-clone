import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAouthButtonProps = {};

const OAouthButton: React.FC<OAouthButtonProps> = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image height="20px" src="./images/googlelogo.png" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Providers</Button>
    </Flex>
  );
};
export default OAouthButton;
