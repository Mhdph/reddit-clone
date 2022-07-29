import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
function ActionIcons() {
  return (
    <Flex>
      <Flex
        align="center"
        borderRight="1px solid "
        borderColor="gray.200"
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          mr={0.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
          borderRadius={4}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          mr={0.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
          borderRadius={4}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22} />
        </Flex>
        <Flex
          mr={0.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
          borderRadius={4}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex>
        `
        <>
          <Flex
            mr={0.5}
            ml={1.5}
            padding={1}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
            borderRadius={4}
          >
            <Icon as={BsChatDots} fontSize={20} />
          </Flex>
          <Flex
            mr={0.5}
            ml={1.5}
            padding={1}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
            borderRadius={4}
          >
            <Icon as={IoNotificationsOutline} fontSize={20} />
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            mr={0.5}
            ml={1.5}
            padding={1}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
            borderRadius={4}
          >
            <Icon as={GrAdd} fontSize={20} />
          </Flex>
        </>
      </Flex>
    </Flex>
  );
}

export default ActionIcons;
