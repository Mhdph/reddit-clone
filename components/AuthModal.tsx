import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import OAuthButton from "./OAuthButton";

export default function AuthModal() {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">
            {modalState.view === "login" && "Login"}
            {modalState.view === "Sign Up" && "Sign Up"}
            {modalState.view === "resetPassword" && "resetPassword"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col items-center justify-center ">
            <OAuthButton />
            <p className="mt-2 text-gray-700 text-bold">OR</p>
            <div className="flex pt-1 flex-col align-center justify-center w-[70%] pb-2">
              <AuthInputs />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
