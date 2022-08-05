/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ITokenPriceOracle,
  ITokenPriceOracleInterface,
} from "../ITokenPriceOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "GetTokenPriceInUsd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "SetApiUrl",
    type: "event",
  },
  {
    inputs: [],
    name: "getTokenPriceInUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requestTokenPriceInUsd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "setApiUrl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITokenPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenPriceOracleInterface {
    return new utils.Interface(_abi) as ITokenPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as ITokenPriceOracle;
  }
}
