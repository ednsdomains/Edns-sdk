/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Diamond, DiamondInterface } from "../Diamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export class Diamond__factory {
  static readonly abi = _abi;
  static createInterface(): DiamondInterface {
    return new utils.Interface(_abi) as DiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Diamond {
    return new Contract(address, _abi, signerOrProvider) as Diamond;
  }
}
