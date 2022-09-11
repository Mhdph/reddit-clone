import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfmembers: number;
  privacyType: "public" | "restricted" | "private";
  cretedAt?: Timestamp;
  imageUrl?: string;
}
export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}

interface CommunityState {
  mySnippets: CommunitySnippet[];
}

const defaultCommunityState: CommunityState = {
  mySnippets: [],
};

export const CommunityState = atom<CommunityState>({
  key: "communitiState",
  default: defaultCommunityState,
});
