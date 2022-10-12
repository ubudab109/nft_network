import { useContext, useState, useEffect } from "react";
import { DappContext } from "@provider/DappProvider";
import { utils } from "ethers";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface IStore {
  address?: string | null;
  balance: string;
  isInitialized: boolean;
  setAddress: (val: string | null) => void;
  setBalance: (val: string) => void;
  setInitialized: (val: boolean) => void;
}

export const baseStore = create(
  subscribeWithSelector<IStore>((set) => {
    return {
      address: undefined,
      balance: "0",
      isInitialized: false,
      setAddress: (val) => set({ address: val }),
      setBalance: (val) => set({ balance: val }),
      setInitialized: (val) => set({ isInitialized: val }),
    };
  })
);

export const useWallet = () => {
  const { provider, metamask } = useContext(DappContext);
  const [isLoading, setLoading] = useState(false);
  const {
    balance,
    setBalance,
    address,
    setAddress,
    isInitialized,
    setInitialized,
  } = baseStore();

  useEffect(() => {
    if (!metamask) return;
    if (!provider) return;
    if (baseStore.getState().isInitialized) return;
    setInitialized(true);

    const updateBalance = () => {
      const _address = baseStore.getState().address;
      if (_address) {
        provider.getBalance(_address).then((balance) => {
          const _balanceString = utils.formatEther(balance);
          setBalance("" + Number(_balanceString).toFixed(3));
        });
      }
    };
    const updateAddress = () => {
      metamask
        .request({ method: "eth_requestAccounts" })
        .then(([address]: any) => {
          setAddress(address);
          updateBalance();
        });
    };
    updateAddress();
    metamask.on("accountsChanged", updateAddress);
    provider.on("block", updateBalance);
  }, [
    isInitialized,
    metamask,
    provider,
    setAddress,
    setBalance,
    setInitialized,
  ]);

  const connect = async () => {
    try {
      setLoading(true);
      await metamask?.request({ method: "eth_requestAccounts" });
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const disconnect = () => {
    setAddress(null);
  };

  return { address, balance, connect, isLoading, disconnect };
};
