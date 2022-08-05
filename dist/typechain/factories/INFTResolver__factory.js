"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.INFTResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "fqdn",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "host",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "domain",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetNFT",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "fqdn",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "nft",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "contract_",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                ],
                internalType: "struct INFTResolver.NFT",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "host",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "domain",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "nft",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "contract_",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                ],
                internalType: "struct INFTResolver.NFT",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "fqdn",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "nft",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "contract_",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                ],
                internalType: "struct INFTResolver.NFT",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "host",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "domain",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "contract_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "host",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "domain",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "contract_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setNFT_SYNC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class INFTResolver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.INFTResolver__factory = INFTResolver__factory;
INFTResolver__factory.abi = _abi;
//# sourceMappingURL=INFTResolver__factory.js.map