import { useContext, useEffect } from "react";
import { DappContext } from "@provider/DappProvider";
import { utils } from "ethers";
import create from "zustand";
import { NetworkRef } from "netref-sol/typechain/NetworkRef";
import { baseStore as walletBaseStore } from "./useWallet";

const RANKS = <const>[
  "Newbie",
  "Rare",
  "SuperRare",
  "Epic",
  "Legend",
  "SuperLegend",
];

interface IStore {
  isInitialized: boolean;
  setInitialized: (val: boolean) => void;
  rank: typeof RANKS[number];
  setRank: (val: typeof RANKS[number]) => void;
  isRegistered: boolean;
  setRegistered: (val: boolean) => void;
  reward: string;
  setReward: (val: string) => void;
  downlineCount: number;
  setDownlineCount: (val: number) => void;
  rankRewardEstimation: string;
  setRankRewardEstimation: (val: string) => void;
}

const baseStore = create<IStore>((set) => {
  return {
    isInitialized: false,
    setInitialized: (val) => set({ isInitialized: val }),
    rank: "Newbie",
    setRank: (val) => set({ rank: val }),
    isRegistered: false,
    setRegistered: (val) => set({ isRegistered: val }),
    reward: "0",
    setReward: (val) => set({ reward: val }),
    downlineCount: 0,
    setDownlineCount: (val) => set({ downlineCount: val }),
    rankRewardEstimation: "0",
    setRankRewardEstimation: (val) => set({ rankRewardEstimation: val }),
  };
});

const updateAccount = (netref: NetworkRef) => {
  const { address } = walletBaseStore.getState();
  const {
    setDownlineCount,
    setRank,
    setRankRewardEstimation,
    setReward,
    setRegistered,
  } = baseStore.getState();

  if (!address) return;

  netref.getUnclaimedReward(address).then((res) => {
    const _rewardString = utils.formatEther(res);
    setReward("" + Number(_rewardString).toFixed(3));
  });

  netref.accounts(address).then((res) => {
    setRegistered(res.isRegistered);
    setRank(RANKS[res.rank]);
    const _downlineCount = Math.ceil(
      Number(utils.formatEther(res.downlineCount)) / 1e-18
    );
    setDownlineCount(_downlineCount);

    if (res.rank > 0) {
      netref.getRankRewardEstimation().then((res) => {
        const _rewardString = utils.formatEther(res);
        setRankRewardEstimation("" + Number(_rewardString).toFixed(3));
      });
    }
  });
};

export const useNetRef = () => {
  const { netref, provider } = useContext(DappContext);
  const {
    rank,
    reward,
    isRegistered,
    rankRewardEstimation,
    downlineCount,
    setInitialized,
  } = baseStore();

  useEffect(() => {
    if (!provider) return;
    if (!netref) return;
    if (baseStore.getState().isInitialized) return;
    setInitialized(true);

    const _updateAccount = () => updateAccount(netref);
    _updateAccount();
    provider.on("block", _updateAccount);
    walletBaseStore.subscribe(_updateAccount);
  }, [provider, netref, setInitialized]);

  const register = async (referrer: string) => {
    if (!netref) return;
    const registrationFee = await netref.registrationFee();
    return await netref.register(referrer, {
      value: registrationFee,
    });
  };

  const claimReward = async () => {
    if (!netref) return;
    return await netref.claimRewards();
  };

  const claimMyRankReward = async () => {
    if (!netref) return;
    return await netref.claimMyRankReward();
  };

  return {
    register,
    rank,
    reward,
    isRegistered,
    claimReward,
    rankRewardEstimation,
    downlineCount,
    claimMyRankReward,
  };
};
