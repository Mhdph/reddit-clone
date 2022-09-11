import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Community, CommunityState } from "../atoms/communitiesAtom";

function useCommunityData() {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(CommunityState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const joinCommunity = (communityData: Community) => {};
  const leaveCommunity = (communityId: string) => {};
  const onJoinoeLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const getmySnippets = async () => {
    setLoading(true);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return {
    communityStateValue,
    onJoinoeLeaveCommunity,
  };
}

export default useCommunityData;
