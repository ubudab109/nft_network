import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getPetmoonNftContract } from "lib/contractFactory";

type Attribute = {
  trait_type: string;
  value: string;
  desc: string;
};

type PetmoonCard = {
  id: string;
  name: string;
  video: string;
  image: string;
  attributes: Attribute[];
};

interface IState {
  total: number;
  isReady: boolean;
  isLoading: boolean;
  isHasNext: boolean;
  list: PetmoonCard[];
}

export const usePetList = (address: string) => {
  const [state, setState] = useState<IState>({
    total: 0,
    isLoading: false,
    isReady: false,
    isHasNext: false,
    list: [],
  });

  const loadNext = useCallback(async () => {
    if (state.isLoading) return;
    const contract = getPetmoonNftContract();
    const startPos = state.list.length;
    const endPos = startPos + 10 > state.total ? state.total : startPos + 10;

    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const _rawList = new Array(endPos - startPos)
        .fill(null)
        .map(async (_, idx) => {
          const _idx = idx + startPos;
          const tokenId = await contract.tokenOfOwnerByIndex(address, _idx);
          const hex = (tokenId as any)._hex;
          const _tokenId = parseInt(hex, 16);
          const uri = await contract.tokenURI(_tokenId);
          const { data } = await axios.get<PetmoonCard>(uri);
          return data;
        });

      await Promise.all(_rawList).then((cardList) => {
        setState((prev) => ({ ...prev, list: [...prev.list, ...cardList] }));
      });
    } catch (error) {
    } finally {
      setState((prev) => ({
        ...prev,
        isHasNext: prev.list.length < prev.total,
        isLoading: false,
      }));
    }
  }, [state, address]);

  useEffect(() => {
    if (!address) return;
    const contract = getPetmoonNftContract();

    // get total balance or total nft
    contract.balanceOf(address).then((value) => {
      const hex = (value as any)._hex;
      const total = parseInt(hex, 16);
      setState((prev) => ({
        ...prev,
        total,
        list: [],
        isReady: true,
      }));
    });
  }, [address]);

  useEffect(() => {
    if (state.isReady && state.list.length === 0 && address) {
      loadNext();
    }
  }, [state.isReady, state.list, address, loadNext]);

  return { loadNext, ...state };
};
