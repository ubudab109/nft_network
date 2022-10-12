import React, { createContext, useEffect, useState, useRef } from "react";
import * as ethers from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import NetRefJsonContract from "netref-sol/artifacts/contracts/NetworkRef.sol/NetworkRef.json";
import { NetworkRef } from "netref-sol/typechain/NetworkRef";
import detectEthereumProvider from "@metamask/detect-provider";

interface IStore {
  provider: Web3Provider | null;
  metamask: any | null;
  netref: NetworkRef | null;
  isMetamaskInstalled: boolean;
}

export const DappContext = createContext<IStore>(null as any);

const DappProvider: React.FC = (props) => {
  const [state, setState] = useState<IStore>({
    provider: null,
    metamask: null,
    netref: null,
    isMetamaskInstalled: true,
  });
  const isInitiated = useRef<boolean>(false);

  const initialize = async () => {
    try {
      const metamask = await detectEthereumProvider({
        mustBeMetaMask: false,
      });
      const etherProvider = new ethers.providers.Web3Provider(metamask as any);
      const signer = etherProvider.getSigner();
      const netrefContract: NetworkRef = new ethers.Contract(
        process.env.NEXT_PUBLIC_NETREF_CONTRACT_ADDR as string ?? "",
        NetRefJsonContract.abi,
        signer
      ) as any;
      setState({
        metamask,
        provider: etherProvider,
        netref: netrefContract,
        isMetamaskInstalled: true,
      });
    } catch (error) {
      setState((prev) => ({ ...prev, isMetamaskInstalled: false }));
    }
  };

  useEffect(() => {
    if (!isInitiated.current) {
      initialize();
      isInitiated.current = true;
    }
  }, []);

  return (
    <DappContext.Provider value={state}>{props.children}</DappContext.Provider>
  );
};

export default DappProvider;
