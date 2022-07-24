import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const [signUpForm, setSignUpForm] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signUpForm);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onsubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        fontSize="10pt"
        onChange={onChange}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        mb={2}
        fontSize="10pt"
        onChange={onChange}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        bg="gray.50"
      />
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Log In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Alreadey a redditor?</Text>
        <Text
          onClick={() => setAuthModalState({ open: true, view: "login" })}
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
