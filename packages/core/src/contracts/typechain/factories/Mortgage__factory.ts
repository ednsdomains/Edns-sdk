/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mortgage, MortgageInterface } from "../Mortgage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRegistry",
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
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "getRequirement",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "contract IERC20Upgradeable",
        name: "token_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "isExists",
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
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
    ],
    name: "isFulfill",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRegistry",
        name: "registry_",
        type: "address",
      },
    ],
    name: "setRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setRequirement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tld",
        type: "bytes32",
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
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611ed661004c6000396000818161083f0152818161087f0152818161093e0152818161097e0152610a0d0152611ed66000f3fe60806040526004361061014b5760003560e01c80635ab1bd53116100b6578063a217fddf1161006f578063a217fddf146103cd578063a91ee0dc146103e2578063c4d66de814610402578063cf0d909814610422578063d547741f14610442578063f5b541a61461046257600080fd5b80635ab1bd53146103145780635c975abb1461033d57806375b238fc1461035657806377e29de1146103785780638456cb591461039857806391d14854146103ad57600080fd5b80633659cfe6116101085780633659cfe6146102455780633f4ba83a14610265578063468f442a1461027a5780634d844e15146102b25780634f1ef286146102ec57806352d1902d146102ff57600080fd5b806301ffc9a7146101505780630bf8dace14610185578063248a9ca3146101a55780632f2ff15d146101e35780633309117b1461020557806336568abe14610225575b600080fd5b34801561015c57600080fd5b5061017061016b36600461199d565b610496565b60405190151581526020015b60405180910390f35b34801561019157600080fd5b506101706101a03660046119c7565b6104cd565b3480156101b157600080fd5b506101d56101c03660046119e9565b60009081526097602052604090206001015490565b60405190815260200161017c565b3480156101ef57600080fd5b506102036101fe366004611a17565b610597565b005b34801561021157600080fd5b50610203610220366004611a47565b6105c1565b34801561023157600080fd5b50610203610240366004611a17565b6107b7565b34801561025157600080fd5b50610203610260366004611a86565b610835565b34801561027157600080fd5b50610203610914565b34801561028657600080fd5b506101d56102953660046119c7565b600090815261016260209081526040808320938352929052205490565b3480156102be57600080fd5b506101706102cd3660046119c7565b6000908152610162602090815260408083209383529290522054151590565b6102036102fa366004611ab9565b610934565b34801561030b57600080fd5b506101d5610a00565b34801561032057600080fd5b50610160546040516001600160a01b03909116815260200161017c565b34801561034957600080fd5b5061012d5460ff16610170565b34801561036257600080fd5b506101d5600080516020611e8183398151915281565b34801561038457600080fd5b50610203610393366004611b7d565b610ab3565b3480156103a457600080fd5b50610203610afc565b3480156103b957600080fd5b506101706103c8366004611a17565b610b1c565b3480156103d957600080fd5b506101d5600081565b3480156103ee57600080fd5b506102036103fd366004611a86565b610b47565b34801561040e57600080fd5b5061020361041d366004611a86565b610b83565b34801561042e57600080fd5b5061020361043d366004611b7d565b610c95565b34801561044e57600080fd5b5061020361045d366004611a17565b610d76565b34801561046e57600080fd5b506101d57f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92981565b60006001600160e01b03198216637965db0b60e01b14806104c757506301ffc9a760e01b6001600160e01b03198316145b92915050565b600081815261016260209081526040808320858452825280832054848452610161835281842086855290925280832061016054915163d8c6608360e01b81526004810187905260248101869052909184916001600160a01b039091169063d8c6608390604401602060405180830381865afa158015610550573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105749190611ba9565b6001600160a01b0316815260208101919091526040016000205410159392505050565b6000828152609760205260409020600101546105b281610d9b565b6105bc8383610da5565b505050565b6105c9610e2b565b6105d1610e74565b6000838152610162602090815260408083208784529091529020546106315760405162461bcd60e51b8152602060048201526011602482015270444f4d41494e5f4e4f545f45584953545360781b60448201526064015b60405180910390fd5b610160546040516312490c8d60e11b815260048101869052602481018590526001600160a01b0390911690632492191a90604401602060405180830381865afa158015610682573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a69190611bc6565b6106e35760405162461bcd60e51b815260206004820152600e60248201526d1113d350525397d156141254915160921b6044820152606401610628565b61071933600085815261016260209081526040808320898452909152902054309061015f546001600160a01b0316929190610ecd565b60008381526101616020908152604080832087845282528083206001600160a01b038616845290915281208054839290610754908490611bfe565b909155505060408051858152602081018590526001600160a01b038416818301526060810183905290517f1fa22acb8d76b805970e68457273d49000dbdbac19dcc5d5b93475a1bf9067469181900360800190a16107b160018055565b50505050565b6001600160a01b03811633146108275760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610628565b6108318282610f27565b5050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361087d5760405162461bcd60e51b815260040161062890611c11565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108c6600080516020611e3a833981519152546001600160a01b031690565b6001600160a01b0316146108ec5760405162461bcd60e51b815260040161062890611c5d565b6108f581610f8e565b6040805160008082526020820190925261091191839190610fa6565b50565b600080516020611e8183398151915261092c81610d9b565b610911611111565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361097c5760405162461bcd60e51b815260040161062890611c11565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109c5600080516020611e3a833981519152546001600160a01b031690565b6001600160a01b0316146109eb5760405162461bcd60e51b815260040161062890611c5d565b6109f482610f8e565b61083182826001610fa6565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610aa05760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610628565b50600080516020611e3a83398151915290565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929610add81610d9b565b5060009182526101626020908152604080842094845293905291902055565b600080516020611e81833981519152610b1481610d9b565b610911611164565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020611e81833981519152610b5f81610d9b565b5061016080546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff1615808015610ba35750600054600160ff909116105b80610bbd5750303b158015610bbd575060005460ff166001145b610c205760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610628565b6000805460ff191660011790558015610c43576000805461ff0019166101001790555b610c4c826111a2565b8015610831576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610c9d610e2b565b610ca5610e74565b6000828152610161602090815260408083208684528252808320338452909152902054811115610d0e5760405162461bcd60e51b81526020600482015260146024820152731195539117d05353d5539517d15610d15151115160621b6044820152606401610628565b61015f54610d27906001600160a01b0316303384610ecd565b604080518481526020810184905233818301526060810183905290517f20ca613731e5b08a28a27b858fdd777974d35a30e467d53da3ae88b64bfa1c619181900360800190a16105bc60018055565b600082815260976020526040902060010154610d9181610d9b565b6105bc8383610f27565b61091181336111da565b610daf8282610b1c565b6108315760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610de73390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61012d5460ff1615610e725760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610628565b565b600260015403610ec65760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610628565b6002600155565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526107b1908590611233565b610f318282610b1c565b156108315760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600080516020611e8183398151915261083181610d9b565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610fd9576105bc83611305565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611033575060408051601f3d908101601f1916820190925261103091810190611ca9565b60015b6110965760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610628565b600080516020611e3a83398151915281146111055760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610628565b506105bc8383836113a1565b6111196113c6565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b61116c610e2b565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111473390565b600054610100900460ff166111c95760405162461bcd60e51b815260040161062890611cc2565b6111d1611410565b6109118161143f565b6111e48282610b1c565b610831576111f1816114d6565b6111fc8360206114e8565b60405160200161120d929190611d31565b60408051601f198184030181529082905262461bcd60e51b825261062891600401611da6565b6000611288826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661168b9092919063ffffffff16565b8051909150156105bc57808060200190518101906112a69190611bc6565b6105bc5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610628565b6001600160a01b0381163b6113725760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610628565b600080516020611e3a83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6113aa836116a2565b6000825111806113b75750805b156105bc576107b183836116e2565b61012d5460ff16610e725760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610628565b600054610100900460ff166114375760405162461bcd60e51b815260040161062890611cc2565b610e726117d6565b600054610100900460ff166114665760405162461bcd60e51b815260040161062890611cc2565b611471600033610da5565b611489600080516020611e8183398151915233610da5565b6114b37f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92933610da5565b61015f80546001600160a01b0319166001600160a01b0392909216919091179055565b60606104c76001600160a01b03831660145b606060006114f7836002611dd9565b611502906002611bfe565b67ffffffffffffffff81111561151a5761151a611aa3565b6040519080825280601f01601f191660200182016040528015611544576020820181803683370190505b509050600360fc1b8160008151811061155f5761155f611df0565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061158e5761158e611df0565b60200101906001600160f81b031916908160001a90535060006115b2846002611dd9565b6115bd906001611bfe565b90505b6001811115611635576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106115f1576115f1611df0565b1a60f81b82828151811061160757611607611df0565b60200101906001600160f81b031916908160001a90535060049490941c9361162e81611e06565b90506115c0565b5083156116845760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610628565b9392505050565b606061169a848460008561180a565b949350505050565b6116ab81611305565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b61174a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610628565b600080846001600160a01b0316846040516117659190611e1d565b600060405180830381855af49150503d80600081146117a0576040519150601f19603f3d011682016040523d82523d6000602084013e6117a5565b606091505b50915091506117cd8282604051806060016040528060278152602001611e5a602791396118e5565b95945050505050565b600054610100900460ff166117fd5760405162461bcd60e51b815260040161062890611cc2565b61012d805460ff19169055565b60608247101561186b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610628565b600080866001600160a01b031685876040516118879190611e1d565b60006040518083038185875af1925050503d80600081146118c4576040519150601f19603f3d011682016040523d82523d6000602084013e6118c9565b606091505b50915091506118da878383876118fe565b979650505050505050565b606083156118f4575081611684565b6116848383611973565b6060831561196d578251600003611966576001600160a01b0385163b6119665760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610628565b508161169a565b61169a83835b8151156119835781518083602001fd5b8060405162461bcd60e51b81526004016106289190611da6565b6000602082840312156119af57600080fd5b81356001600160e01b03198116811461168457600080fd5b600080604083850312156119da57600080fd5b50508035926020909101359150565b6000602082840312156119fb57600080fd5b5035919050565b6001600160a01b038116811461091157600080fd5b60008060408385031215611a2a57600080fd5b823591506020830135611a3c81611a02565b809150509250929050565b60008060008060808587031215611a5d57600080fd5b84359350602085013592506040850135611a7681611a02565b9396929550929360600135925050565b600060208284031215611a9857600080fd5b813561168481611a02565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611acc57600080fd5b8235611ad781611a02565b9150602083013567ffffffffffffffff80821115611af457600080fd5b818501915085601f830112611b0857600080fd5b813581811115611b1a57611b1a611aa3565b604051601f8201601f19908116603f01168101908382118183101715611b4257611b42611aa3565b81604052828152886020848701011115611b5b57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600060608486031215611b9257600080fd5b505081359360208301359350604090920135919050565b600060208284031215611bbb57600080fd5b815161168481611a02565b600060208284031215611bd857600080fd5b8151801515811461168457600080fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156104c7576104c7611be8565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b600060208284031215611cbb57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b83811015611d28578181015183820152602001611d10565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611d69816017850160208801611d0d565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611d9a816028840160208801611d0d565b01602801949350505050565b6020815260008251806020840152611dc5816040850160208701611d0d565b601f01601f19169190910160400192915050565b80820281158282048414176104c7576104c7611be8565b634e487b7160e01b600052603260045260246000fd5b600081611e1557611e15611be8565b506000190190565b60008251611e2f818460208701611d0d565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220f22a18d92daae22e95e5aa50de75b03285026cdc210749feb55cd456fc2368bb64736f6c63430008110033";

export class Mortgage__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Mortgage> {
    return super.deploy(overrides || {}) as Promise<Mortgage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Mortgage {
    return super.attach(address) as Mortgage;
  }
  connect(signer: Signer): Mortgage__factory {
    return super.connect(signer) as Mortgage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MortgageInterface {
    return new utils.Interface(_abi) as MortgageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mortgage {
    return new Contract(address, _abi, signerOrProvider) as Mortgage;
  }
}
