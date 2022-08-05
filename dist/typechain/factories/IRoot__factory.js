"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRoot__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "enable",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "omni",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "reclaim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enable_",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "omni_",
                type: "bool",
            },
        ],
        name: "register",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "resolver",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setControllerApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "bool",
                name: "enable",
                type: "bool",
            },
        ],
        name: "setEnable",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
        ],
        name: "setResolver",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "transfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IRoot__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRoot__factory = IRoot__factory;
IRoot__factory.abi = _abi;
//# sourceMappingURL=IRoot__factory.js.map