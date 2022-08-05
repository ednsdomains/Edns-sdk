import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20PresetMinterPauser, ERC20PresetMinterPauserInterface } from "../ERC20PresetMinterPauser";
export declare class ERC20PresetMinterPauser__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20PresetMinterPauser>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20PresetMinterPauser;
    connect(signer: Signer): ERC20PresetMinterPauser__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200390438038062003904833981810160405281019062000037919062000619565b8181816005908051906020019062000051929190620003cc565b5080600690805190602001906200006a929190620003cc565b5050506000600760006101000a81548160ff021916908315150217905550620000ac6000801b620000a06200013660201b60201c565b6200013e60201b60201c565b620000ed7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6620000e16200013660201b60201c565b6200013e60201b60201c565b6200012e7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a620001226200013660201b60201c565b6200013e60201b60201c565b505062000703565b600033905090565b6200015082826200015460201b60201c565b5050565b6200016b82826200019c60201b62000dfc1760201c565b6200019781600160008581526020019081526020016000206200028d60201b62000edc1790919060201c565b505050565b620001ae8282620002c560201b60201c565b6200028957600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200022e6200013660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000620002bd836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200032f60201b60201c565b905092915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000620003438383620003a960201b60201c565b6200039e578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620003a3565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054620003da90620006cd565b90600052602060002090601f016020900481019282620003fe57600085556200044a565b82601f106200041957805160ff19168380011785556200044a565b828001600101855582156200044a579182015b82811115620004495782518255916020019190600101906200042c565b5b5090506200045991906200045d565b5090565b5b80821115620004785760008160009055506001016200045e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004e5826200049a565b810181811067ffffffffffffffff82111715620005075762000506620004ab565b5b80604052505050565b60006200051c6200047c565b90506200052a8282620004da565b919050565b600067ffffffffffffffff8211156200054d576200054c620004ab565b5b62000558826200049a565b9050602081019050919050565b60005b838110156200058557808201518184015260208101905062000568565b8381111562000595576000848401525b50505050565b6000620005b2620005ac846200052f565b62000510565b905082815260208101848484011115620005d157620005d062000495565b5b620005de84828562000565565b509392505050565b600082601f830112620005fe57620005fd62000490565b5b8151620006108482602086016200059b565b91505092915050565b6000806040838503121562000633576200063262000486565b5b600083015167ffffffffffffffff8111156200065457620006536200048b565b5b6200066285828601620005e6565b925050602083015167ffffffffffffffff8111156200068657620006856200048b565b5b6200069485828601620005e6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006e657607f821691505b60208210811415620006fd57620006fc6200069e565b5b50919050565b6131f180620007136000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d53913931461052d578063d547741f1461054b578063dd62ed3e14610567578063e63ab1e914610597576101c4565b8063a457c2d71461049d578063a9059cbb146104cd578063ca15c873146104fd576101c4565b80639010d07c116100d35780639010d07c1461040157806391d148541461043157806395d89b4114610461578063a217fddf1461047f576101c4565b806370a08231146103ab57806379cc6790146103db5780638456cb59146103f7576101c4565b8063313ce567116101665780633f4ba83a116101405780633f4ba83a1461034b57806340c10f191461035557806342966c68146103715780635c975abb1461038d576101c4565b8063313ce567146102e157806336568abe146102ff578063395093511461031b576101c4565b806318160ddd116101a257806318160ddd1461024757806323b872dd14610265578063248a9ca3146102955780632f2ff15d146102c5576101c4565b806301ffc9a7146101c957806306fdde03146101f9578063095ea7b314610217575b600080fd5b6101e360048036038101906101de9190612085565b6105b5565b6040516101f091906120cd565b60405180910390f35b61020161062f565b60405161020e9190612181565b60405180910390f35b610231600480360381019061022c9190612237565b6106c1565b60405161023e91906120cd565b60405180910390f35b61024f6106e4565b60405161025c9190612286565b60405180910390f35b61027f600480360381019061027a91906122a1565b6106ee565b60405161028c91906120cd565b60405180910390f35b6102af60048036038101906102aa919061232a565b61071d565b6040516102bc9190612366565b60405180910390f35b6102df60048036038101906102da9190612381565b61073c565b005b6102e9610765565b6040516102f691906123dd565b60405180910390f35b61031960048036038101906103149190612381565b61076e565b005b61033560048036038101906103309190612237565b6107f1565b60405161034291906120cd565b60405180910390f35b61035361089b565b005b61036f600480360381019061036a9190612237565b610915565b005b61038b600480360381019061038691906123f8565b610993565b005b6103956109a7565b6040516103a291906120cd565b60405180910390f35b6103c560048036038101906103c09190612425565b6109be565b6040516103d29190612286565b60405180910390f35b6103f560048036038101906103f09190612237565b610a07565b005b6103ff610a27565b005b61041b60048036038101906104169190612452565b610aa1565b60405161042891906124a1565b60405180910390f35b61044b60048036038101906104469190612381565b610ad0565b60405161045891906120cd565b60405180910390f35b610469610b3a565b6040516104769190612181565b60405180910390f35b610487610bcc565b6040516104949190612366565b60405180910390f35b6104b760048036038101906104b29190612237565b610bd3565b6040516104c491906120cd565b60405180910390f35b6104e760048036038101906104e29190612237565b610cbd565b6040516104f491906120cd565b60405180910390f35b6105176004803603810190610512919061232a565b610ce0565b6040516105249190612286565b60405180910390f35b610535610d04565b6040516105429190612366565b60405180910390f35b61056560048036038101906105609190612381565b610d28565b005b610581600480360381019061057c91906124bc565b610d51565b60405161058e9190612286565b60405180910390f35b61059f610dd8565b6040516105ac9190612366565b60405180910390f35b60007f5a05180f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610628575061062782610f0c565b5b9050919050565b60606005805461063e9061252b565b80601f016020809104026020016040519081016040528092919081815260200182805461066a9061252b565b80156106b75780601f1061068c576101008083540402835291602001916106b7565b820191906000526020600020905b81548152906001019060200180831161069a57829003601f168201915b5050505050905090565b6000806106cc610f86565b90506106d9818585610f8e565b600191505092915050565b6000600454905090565b6000806106f9610f86565b9050610706858285611159565b6107118585856111e5565b60019150509392505050565b6000806000838152602001908152602001600020600101549050919050565b6107458261071d565b61075681610751610f86565b611469565b6107608383611506565b505050565b60006012905090565b610776610f86565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da906125cf565b60405180910390fd5b6107ed828261153a565b5050565b6000806107fc610f86565b9050610890818585600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088b919061261e565b610f8e565b600191505092915050565b6108cc7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6108c7610f86565b610ad0565b61090b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610902906126e6565b60405180910390fd5b61091361156e565b565b6109467f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610941610f86565b610ad0565b610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097c90612778565b60405180910390fd5b61098f8282611610565b5050565b6109a461099e610f86565b82611771565b50565b6000600760009054906101000a900460ff16905090565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a1982610a13610f86565b83611159565b610a238282611771565b5050565b610a587f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610a53610f86565b610ad0565b610a97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8e9061280a565b60405180910390fd5b610a9f61194a565b565b6000610ac882600160008681526020019081526020016000206119ed90919063ffffffff16565b905092915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060068054610b499061252b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b759061252b565b8015610bc25780601f10610b9757610100808354040283529160200191610bc2565b820191906000526020600020905b815481529060010190602001808311610ba557829003601f168201915b5050505050905090565b6000801b81565b600080610bde610f86565b90506000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610ca4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9b9061289c565b60405180910390fd5b610cb18286868403610f8e565b60019250505092915050565b600080610cc8610f86565b9050610cd58185856111e5565b600191505092915050565b6000610cfd60016000848152602001908152602001600020611a07565b9050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610d318261071d565b610d4281610d3d610f86565b611469565b610d4c838361153a565b505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b610e068282610ad0565b610ed857600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e7d610f86565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000610f04836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611a1c565b905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f7f5750610f7e82611a8c565b5b9050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ffe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff59061292e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561106e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611065906129c0565b60405180910390fd5b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161114c9190612286565b60405180910390a3505050565b60006111658484610d51565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111df57818110156111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c890612a2c565b60405180910390fd5b6111de8484848403610f8e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611255576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124c90612abe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bc90612b50565b60405180910390fd5b6112d0838383611af6565b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611357576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134e90612be2565b60405180910390fd5b818103600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113ec919061261e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114509190612286565b60405180910390a3611463848484611b06565b50505050565b6114738282610ad0565b611502576114988173ffffffffffffffffffffffffffffffffffffffff166014611b0b565b6114a68360001c6020611b0b565b6040516020016114b7929190612cd6565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f99190612181565b60405180910390fd5b5050565b6115108282610dfc565b6115358160016000858152602001908152602001600020610edc90919063ffffffff16565b505050565b6115448282611d47565b6115698160016000858152602001908152602001600020611e2890919063ffffffff16565b505050565b6115766109a7565b6115b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ac90612d5c565b60405180910390fd5b6000600760006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6115f9610f86565b60405161160691906124a1565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167790612dc8565b60405180910390fd5b61168c60008383611af6565b806004600082825461169e919061261e565b9250508190555080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116f4919061261e565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516117599190612286565b60405180910390a361176d60008383611b06565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d890612e5a565b60405180910390fd5b6117ed82600083611af6565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186b90612eec565b60405180910390fd5b818103600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600460008282546118cc9190612f0c565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119319190612286565b60405180910390a361194583600084611b06565b505050565b6119526109a7565b15611992576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198990612f8c565b60405180910390fd5b6001600760006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586119d6610f86565b6040516119e391906124a1565b60405180910390a1565b60006119fc8360000183611e58565b60001c905092915050565b6000611a1582600001611e83565b9050919050565b6000611a288383611e94565b611a81578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611a86565b600090505b92915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611b01838383611eb7565b505050565b505050565b606060006002836002611b1e9190612fac565b611b28919061261e565b67ffffffffffffffff811115611b4157611b40613006565b5b6040519080825280601f01601f191660200182016040528015611b735781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611bab57611baa613035565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611c0f57611c0e613035565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002611c4f9190612fac565b611c59919061261e565b90505b6001811115611cf9577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611c9b57611c9a613035565b5b1a60f81b828281518110611cb257611cb1613035565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611cf290613064565b9050611c5c565b5060008414611d3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d34906130da565b60405180910390fd5b8091505092915050565b611d518282610ad0565b15611e2457600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611dc9610f86565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6000611e50836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611f0f565b905092915050565b6000826000018281548110611e7057611e6f613035565b5b9060005260206000200154905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b611ec2838383612023565b611eca6109a7565b15611f0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f019061316c565b60405180910390fd5b505050565b60008083600101600084815260200190815260200160002054905060008114612017576000600182611f419190612f0c565b9050600060018660000180549050611f599190612f0c565b9050818114611fc8576000866000018281548110611f7a57611f79613035565b5b9060005260206000200154905080876000018481548110611f9e57611f9d613035565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480611fdc57611fdb61318c565b5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061201d565b60009150505b92915050565b505050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6120628161202d565b811461206d57600080fd5b50565b60008135905061207f81612059565b92915050565b60006020828403121561209b5761209a612028565b5b60006120a984828501612070565b91505092915050565b60008115159050919050565b6120c7816120b2565b82525050565b60006020820190506120e260008301846120be565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612122578082015181840152602081019050612107565b83811115612131576000848401525b50505050565b6000601f19601f8301169050919050565b6000612153826120e8565b61215d81856120f3565b935061216d818560208601612104565b61217681612137565b840191505092915050565b6000602082019050818103600083015261219b8184612148565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006121ce826121a3565b9050919050565b6121de816121c3565b81146121e957600080fd5b50565b6000813590506121fb816121d5565b92915050565b6000819050919050565b61221481612201565b811461221f57600080fd5b50565b6000813590506122318161220b565b92915050565b6000806040838503121561224e5761224d612028565b5b600061225c858286016121ec565b925050602061226d85828601612222565b9150509250929050565b61228081612201565b82525050565b600060208201905061229b6000830184612277565b92915050565b6000806000606084860312156122ba576122b9612028565b5b60006122c8868287016121ec565b93505060206122d9868287016121ec565b92505060406122ea86828701612222565b9150509250925092565b6000819050919050565b612307816122f4565b811461231257600080fd5b50565b600081359050612324816122fe565b92915050565b6000602082840312156123405761233f612028565b5b600061234e84828501612315565b91505092915050565b612360816122f4565b82525050565b600060208201905061237b6000830184612357565b92915050565b6000806040838503121561239857612397612028565b5b60006123a685828601612315565b92505060206123b7858286016121ec565b9150509250929050565b600060ff82169050919050565b6123d7816123c1565b82525050565b60006020820190506123f260008301846123ce565b92915050565b60006020828403121561240e5761240d612028565b5b600061241c84828501612222565b91505092915050565b60006020828403121561243b5761243a612028565b5b6000612449848285016121ec565b91505092915050565b6000806040838503121561246957612468612028565b5b600061247785828601612315565b925050602061248885828601612222565b9150509250929050565b61249b816121c3565b82525050565b60006020820190506124b66000830184612492565b92915050565b600080604083850312156124d3576124d2612028565b5b60006124e1858286016121ec565b92505060206124f2858286016121ec565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061254357607f821691505b60208210811415612557576125566124fc565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b60006125b9602f836120f3565b91506125c48261255d565b604082019050919050565b600060208201905081810360008301526125e8816125ac565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061262982612201565b915061263483612201565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612669576126686125ef565b5b828201905092915050565b7f45524332305072657365744d696e7465725061757365723a206d75737420686160008201527f76652070617573657220726f6c6520746f20756e706175736500000000000000602082015250565b60006126d06039836120f3565b91506126db82612674565b604082019050919050565b600060208201905081810360008301526126ff816126c3565b9050919050565b7f45524332305072657365744d696e7465725061757365723a206d75737420686160008201527f7665206d696e74657220726f6c6520746f206d696e7400000000000000000000602082015250565b60006127626036836120f3565b915061276d82612706565b604082019050919050565b6000602082019050818103600083015261279181612755565b9050919050565b7f45524332305072657365744d696e7465725061757365723a206d75737420686160008201527f76652070617573657220726f6c6520746f207061757365000000000000000000602082015250565b60006127f46037836120f3565b91506127ff82612798565b604082019050919050565b60006020820190508181036000830152612823816127e7565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006128866025836120f3565b91506128918261282a565b604082019050919050565b600060208201905081810360008301526128b581612879565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006129186024836120f3565b9150612923826128bc565b604082019050919050565b600060208201905081810360008301526129478161290b565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006129aa6022836120f3565b91506129b58261294e565b604082019050919050565b600060208201905081810360008301526129d98161299d565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000612a16601d836120f3565b9150612a21826129e0565b602082019050919050565b60006020820190508181036000830152612a4581612a09565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612aa86025836120f3565b9150612ab382612a4c565b604082019050919050565b60006020820190508181036000830152612ad781612a9b565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612b3a6023836120f3565b9150612b4582612ade565b604082019050919050565b60006020820190508181036000830152612b6981612b2d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612bcc6026836120f3565b9150612bd782612b70565b604082019050919050565b60006020820190508181036000830152612bfb81612bbf565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000612c43601783612c02565b9150612c4e82612c0d565b601782019050919050565b6000612c64826120e8565b612c6e8185612c02565b9350612c7e818560208601612104565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000612cc0601183612c02565b9150612ccb82612c8a565b601182019050919050565b6000612ce182612c36565b9150612ced8285612c59565b9150612cf882612cb3565b9150612d048284612c59565b91508190509392505050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b6000612d466014836120f3565b9150612d5182612d10565b602082019050919050565b60006020820190508181036000830152612d7581612d39565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612db2601f836120f3565b9150612dbd82612d7c565b602082019050919050565b60006020820190508181036000830152612de181612da5565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612e446021836120f3565b9150612e4f82612de8565b604082019050919050565b60006020820190508181036000830152612e7381612e37565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000612ed66022836120f3565b9150612ee182612e7a565b604082019050919050565b60006020820190508181036000830152612f0581612ec9565b9050919050565b6000612f1782612201565b9150612f2283612201565b925082821015612f3557612f346125ef565b5b828203905092915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000612f766010836120f3565b9150612f8182612f40565b602082019050919050565b60006020820190508181036000830152612fa581612f69565b9050919050565b6000612fb782612201565b9150612fc283612201565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ffb57612ffa6125ef565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061306f82612201565b91506000821415613083576130826125ef565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006130c46020836120f3565b91506130cf8261308e565b602082019050919050565b600060208201905081810360008301526130f3816130b7565b9050919050565b7f45524332305061757361626c653a20746f6b656e207472616e7366657220776860008201527f696c652070617573656400000000000000000000000000000000000000000000602082015250565b6000613156602a836120f3565b9150613161826130fa565b604082019050919050565b6000602082019050818103600083015261318581613149565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122015474bc90ddf936db8e8c69cc4ab58e737a9bef0dc0119bf6c25c02246eeaeee64736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20PresetMinterPauserInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20PresetMinterPauser;
}
