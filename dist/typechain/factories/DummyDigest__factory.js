"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyDigest__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101ca806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f7e83aee14610030575b600080fd5b61004a600480360381019061004591906100dd565b610060565b6040516100579190610179565b60405180910390f35b600060019050949350505050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261009d5761009c610078565b5b8235905067ffffffffffffffff8111156100ba576100b961007d565b5b6020830191508360018202830111156100d6576100d5610082565b5b9250929050565b600080600080604085870312156100f7576100f661006e565b5b600085013567ffffffffffffffff81111561011557610114610073565b5b61012187828801610087565b9450945050602085013567ffffffffffffffff81111561014457610143610073565b5b61015087828801610087565b925092505092959194509250565b60008115159050919050565b6101738161015e565b82525050565b600060208201905061018e600083018461016a565b9291505056fea26469706673582212202c41e98945405b79179ae664a51d6b9e670706e90033070aa51e6c2277e3179164736f6c634300080a0033";
class DummyDigest__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DummyDigest__factory = DummyDigest__factory;
DummyDigest__factory.bytecode = _bytecode;
DummyDigest__factory.abi = _abi;
//# sourceMappingURL=DummyDigest__factory.js.map