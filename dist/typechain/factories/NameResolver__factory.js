"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "setName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class NameResolver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NameResolver__factory = NameResolver__factory;
NameResolver__factory.abi = _abi;
//# sourceMappingURL=NameResolver__factory.js.map