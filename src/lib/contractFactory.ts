import * as ethers from "ethers";
import PetmoonAbi from "netref-sol/artifacts/contracts/PetmoonNft.sol/Petmoon.json";
import { Petmoon } from "netref-sol/typechain/Petmoon";
import { WS_ENDPOINTS } from "constant/endpoints";
import { PETMOON_NFT } from "constant/contract";

const CURRENT_CHAIN_ID = process.env.CHAIN_ID || "0x38";

export const getMainProvider = (): ethers.providers.WebSocketProvider => {
  const _endpoint = WS_ENDPOINTS[CURRENT_CHAIN_ID as "0x38"];

  if (!(window as any)["__main_app_eth_provider"] && _endpoint) {
    (window as any)["__main_app_eth_provider"] =
      new ethers.providers.WebSocketProvider(_endpoint);
  }

  return (window as any)["__main_app_eth_provider"];
};

export const getPetmoonNftContract = (): Petmoon => {
  const _contractAddress = PETMOON_NFT[CURRENT_CHAIN_ID as "0x38"];
  const provider = getMainProvider();

  if (
    !(window as any)["__petmoon_nft_contract"] &&
    _contractAddress &&
    provider
  ) {
    (window as any)["__petmoon_nft_contract"] = new ethers.Contract(
      _contractAddress,
      PetmoonAbi.abi,
      provider
    ) as any;
  }

  return (window as any)["__petmoon_nft_contract"];
};
