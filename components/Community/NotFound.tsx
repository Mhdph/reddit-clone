import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <Flex
      direction="column"
      minHeight="60vh"
      alignItems="center"
      justifyContent="center"
    >
      Sorry,that community does not exit or has been banned
      <Link href="/">
        <Button mt={4}>GO HOME</Button>
      </Link>
    </Flex>
  );
}

export default NotFound;
