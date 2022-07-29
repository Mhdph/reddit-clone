import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Input,
  Stack,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

import React, { useState } from "react";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityname, setCommunityname] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, SetCommunityType] = useState("public");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setCommunityname(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };

  const onCommunityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetCommunityType(event.target.name);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create Community
          </ModalHeader>

          <Box px={3}>
            <ModalCloseButton />
            <ModalBody
              border="1px solid red"
              display="flex"
              flexDirection="column"
              py={3}
            >
              <Text fontWeight={600}>Name</Text>
              <Text fontSize={11} color="gray.100">
                Community names including capitalization connot be change
              </Text>
              <Text
                color="gray.400"
                position="relative"
                top="28px"
                left="22px"
                width="20px"
              >
                r/
              </Text>
              <Input
                position="relative"
                onChange={handleChange}
                pl={22}
                value={communityname}
                size="sm"
              />
              <Text
                fontSize="9pt"
                color={charsRemaining === 0 ? "red" : "gray.300"}
              >
                {charsRemaining} Characters remaining
              </Text>
              <Box my={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community type
                </Text>
                <Stack spacing={2}>
                  <Checkbox
                    name="public"
                    onChange={onCommunityChange}
                    isChecked={communityType == "public"}
                  >
                    <Flex align="center">
                      <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                      <Text fontSize="10pt" mr={1}>
                        Public
                      </Text>
                      <Text fontSize="8pt" color="gray.500" pt={1}>
                        Anyone,can view post,and comment to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="restericted"
                    onChange={onCommunityChange}
                    isChecked={communityType == "restericted"}
                  >
                    <Flex align="center">
                      <Icon as={BsFillEyeFill} color="gray.500" mr={2} />

                      <Text fontSize="10pt" mr={1}>
                        Restericted
                      </Text>
                      <Text fontSize="8pt" color="gray.500" pt={1}>
                        Anyone,can view post,but only approved users can post
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    isChecked={communityType == "private"}
                    name="private"
                    onChange={onCommunityChange}
                  >
                    <Flex align="center">
                      <Icon as={HiLockClosed} color="gray.500" mr={2} />
                      <Text fontSize="10pt" mr={1}>
                        Private
                      </Text>
                      <Text fontSize="8pt" color="gray.500" pt={1}>
                        Only approved users,can view post,and comment to this
                        community
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg="gray.100" borderRadius="0 0 10px 10px">
            <Button
              variant="outline"
              height="30px"
              mr={3}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button height="30px" onClick={() => {}}>
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
