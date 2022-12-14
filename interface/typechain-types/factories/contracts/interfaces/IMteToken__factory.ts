/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMteToken,
  IMteTokenInterface,
} from "../../../contracts/interfaces/IMteToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMteToken__factory {
  static readonly abi = _abi;
  static createInterface(): IMteTokenInterface {
    return new utils.Interface(_abi) as IMteTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMteToken {
    return new Contract(address, _abi, signerOrProvider) as IMteToken;
  }
}
