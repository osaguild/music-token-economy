/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStakingToken,
  IStakingTokenInterface,
} from "../../../contracts/interfaces/IStakingToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStakingToken__factory {
  static readonly abi = _abi;
  static createInterface(): IStakingTokenInterface {
    return new utils.Interface(_abi) as IStakingTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStakingToken {
    return new Contract(address, _abi, signerOrProvider) as IStakingToken;
  }
}