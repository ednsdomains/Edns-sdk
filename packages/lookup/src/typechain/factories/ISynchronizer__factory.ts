/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISynchronizer, ISynchronizerInterface } from "../ISynchronizer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16[]",
        name: "lzChainIds",
        type: "uint16[]",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "estimateSyncFee",
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
  {
    inputs: [
      {
        internalType: "uint16[]",
        name: "lzChainIds",
        type: "uint16[]",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "sync",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class ISynchronizer__factory {
  static readonly abi = _abi;
  static createInterface(): ISynchronizerInterface {
    return new utils.Interface(_abi) as ISynchronizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISynchronizer {
    return new Contract(address, _abi, signerOrProvider) as ISynchronizer;
  }
}
