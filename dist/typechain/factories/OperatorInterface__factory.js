"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "bytes4",
                name: "callbackFunctionId",
                type: "bytes4",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
        ],
        name: "cancelOracleRequest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable[]",
                name: "receivers",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        name: "distributeFunds",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "callbackAddress",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "callbackFunctionId",
                type: "bytes4",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "data",
                type: "bytes32",
            },
        ],
        name: "fulfillOracleRequest",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "callbackAddress",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "callbackFunctionId",
                type: "bytes4",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "fulfillOracleRequest2",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAuthorizedSenders",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getForwarder",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "node",
                type: "address",
            },
        ],
        name: "isAuthorizedSender",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "specId",
                type: "bytes32",
            },
            {
                internalType: "bytes4",
                name: "callbackFunctionId",
                type: "bytes4",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "dataVersion",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "operatorRequest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "requestPrice",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "serviceAgreementID",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "callbackAddress",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "callbackFunctionId",
                type: "bytes4",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "dataVersion",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "oracleRequest",
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
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "ownerTransferAndCall",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "senders",
                type: "address[]",
            },
        ],
        name: "setAuthorizedSenders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdrawable",
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
];
class OperatorInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.OperatorInterface__factory = OperatorInterface__factory;
OperatorInterface__factory.abi = _abi;
//# sourceMappingURL=OperatorInterface__factory.js.map