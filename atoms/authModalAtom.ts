import { atom } from "recoil";

export interface AuthModalStateProps {
  open: boolean;
  view: ModalView;
}

export type ModalView = "login" | "Sign Up" | "resetPassword";

const defaultModalState: AuthModalStateProps = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalStateProps>({
  key: "authModalState",
  default: defaultModalState,
});
