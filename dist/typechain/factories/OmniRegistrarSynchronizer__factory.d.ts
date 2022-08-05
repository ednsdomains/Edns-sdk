import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OmniRegistrarSynchronizer, OmniRegistrarSynchronizerInterface } from "../OmniRegistrarSynchronizer";
export declare class OmniRegistrarSynchronizer__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OmniRegistrarSynchronizer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OmniRegistrarSynchronizer;
    connect(signer: Signer): OmniRegistrarSynchronizer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612ced806100206000396000f3fe6080604052600436106101e25760003560e01c80637eefcfa211610102578063c542655e11610095578063eb8d72b711610064578063eb8d72b7146105e5578063f2fde38b14610605578063f5ecbdbc14610625578063faab9d391461064557600080fd5b8063c542655e14610565578063cbed8b9c14610585578063cd43c434146105a5578063d547741f146105c557600080fd5b80639afb0f80116100d15780639afb0f80146104f0578063a217fddf14610510578063ac5231ac14610525578063b353aaa71461054557600080fd5b80637eefcfa2146104705780638da5cb5b1461048357806391d14854146104b55780639a8a0592146104d557600080fd5b80633d8b38f61161017a5780635b8c41e6116101495780635b8c41e6146103bd578063715018a61461040c5780637533d7881461042157806375b238fc1461044e57600080fd5b80633d8b38f61461032f57806342d65a8d1461034f578063560df0f31461036f578063565fbec31461039d57600080fd5b806321d93090116101b657806321d930901461027e578063248a9ca3146102b15780632f2ff15d146102ef57806336568abe1461030f57600080fd5b80621d3567146101e757806301ffc9a71461020957806307e0db171461023e57806310ddb1371461025e575b600080fd5b3480156101f357600080fd5b5061020761020236600461221b565b610665565b005b34801561021557600080fd5b506102296102243660046122af565b6108d3565b60405190151581526020015b60405180910390f35b34801561024a57600080fd5b506102076102593660046122d9565b6108fe565b34801561026a57600080fd5b506102076102793660046122d9565b61098d565b34801561028a57600080fd5b5061029e6102993660046122f4565b6109eb565b60405161ffff9091168152602001610235565b3480156102bd57600080fd5b506102e16102cc3660046122f4565b6000908152609a602052604090206001015490565b604051908152602001610235565b3480156102fb57600080fd5b5061020761030a366004612322565b610a23565b34801561031b57600080fd5b5061020761032a366004612322565b610a4e565b34801561033b57600080fd5b5061022961034a366004612352565b610acc565b34801561035b57600080fd5b5061020761036a366004612352565b610b98565b34801561037b57600080fd5b5061022961038a3660046122f4565b600090815260d060205260409020541590565b3480156103a957600080fd5b506102076103b83660046123a4565b610c24565b3480156103c957600080fd5b506102e16103d8366004612491565b6067602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b34801561041857600080fd5b50610207610c69565b34801561042d57600080fd5b5061044161043c3660046122d9565b610c9f565b604051610235919061254a565b34801561045a57600080fd5b506102e1600080516020612c9883398151915281565b61020761047e36600461255d565b610d39565b34801561048f57600080fd5b506033546001600160a01b03165b6040516001600160a01b039091168152602001610235565b3480156104c157600080fd5b506102296104d0366004612322565b610d94565b3480156104e157600080fd5b5060cc5461029e9061ffff1681565b3480156104fc57600080fd5b5061022961050b366004612599565b610dbf565b34801561051c57600080fd5b506102e1600081565b34801561053157600080fd5b5061020761054036600461221b565b610e37565b34801561055157600080fd5b5060655461049d906001600160a01b031681565b34801561057157600080fd5b506102076105803660046125c5565b610e88565b34801561059157600080fd5b506102076105a0366004612696565b610f4f565b3480156105b157600080fd5b506102e16105c036600461255d565b610fea565b3480156105d157600080fd5b506102076105e0366004612322565b611130565b3480156105f157600080fd5b50610207610600366004612352565b611156565b34801561061157600080fd5b50610207610620366004612704565b6111df565b34801561063157600080fd5b50610441610640366004612721565b61127a565b34801561065157600080fd5b50610207610660366004612704565b61131c565b6065546001600160a01b0316336001600160a01b0316146106bd5760405162461bcd60e51b815260206004820152600d60248201526c13d3931657d153911413d25395609a1b60448201526064015b60405180910390fd5b61ffff8616600090815260666020526040812080546106db9061276e565b80601f01602080910402602001604051908101604052809291908181526020018280546107079061276e565b80156107545780601f1061072957610100808354040283529160200191610754565b820191906000526020600020905b81548152906001019060200180831161073757829003601f168201915b5050505050905080518686905014801561078a57508051602082012060405161078090889088906127a9565b6040518091039020145b6107ca5760405162461bcd60e51b81526020600482015260116024820152704f4e4c595f54525553545f52454d4f544560781b60448201526064016106b4565b604051632b148c6b60e21b8152309063ac5231ac906107f7908a908a908a908a908a908a906004016127e2565b600060405180830381600087803b15801561081157600080fd5b505af1925050508015610822575060015b6108ca5782826040516108369291906127a9565b6040805191829003822061ffff8a166000908152606760205291909120909161086290899089906127a9565b9081526040805191829003602090810183206001600160401b0389166000908152915220919091557fe6f254030bcb01ffd20558175c13fcaed6d1520be7becee4c961b65f79243b0d906108c1908990899089908990899089906127e2565b60405180910390a15b50505050505050565b60006001600160e01b031982166359d605cb60e11b14806108f857506108f882611376565b92915050565b6033546001600160a01b031633146109285760405162461bcd60e51b81526004016106b49061282f565b6065546040516307e0db1760e01b815261ffff831660048201526001600160a01b03909116906307e0db17906024015b600060405180830381600087803b15801561097257600080fd5b505af1158015610986573d6000803e3d6000fd5b5050505050565b6033546001600160a01b031633146109b75760405162461bcd60e51b81526004016106b49061282f565b6065546040516310ddb13760e01b815261ffff831660048201526001600160a01b03909116906310ddb13790602401610958565b60cd81815481106109fb57600080fd5b9060005260206000209060109182820401919006600202915054906101000a900461ffff1681565b6000828152609a6020526040902060010154610a3f81336113ab565b610a49838361140f565b505050565b6001600160a01b0381163314610abe5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016106b4565b610ac88282611495565b5050565b61ffff831660009081526066602052604081208054829190610aed9061276e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b199061276e565b8015610b665780601f10610b3b57610100808354040283529160200191610b66565b820191906000526020600020905b815481529060010190602001808311610b4957829003601f168201915b505050505090508383604051610b7d9291906127a9565b60405180910390208180519060200120149150509392505050565b6033546001600160a01b03163314610bc25760405162461bcd60e51b81526004016106b49061282f565b6065546040516342d65a8d60e01b81526001600160a01b03909116906342d65a8d90610bf690869086908690600401612864565b600060405180830381600087803b158015610c1057600080fd5b505af11580156108ca573d6000803e3d6000fd5b333014610c5f5760405162461bcd60e51b815260206004820152600960248201526827a7262cafa9a2a62360b91b60448201526064016106b4565b610ac882826114fc565b6033546001600160a01b03163314610c935760405162461bcd60e51b81526004016106b49061282f565b610c9d6000611559565b565b60666020526000908152604090208054610cb89061276e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce49061276e565b8015610d315780601f10610d0657610100808354040283529160200191610d31565b820191906000526020600020905b815481529060010190602001808311610d1457829003601f168201915b505050505081565b60ce546001600160a01b0316336001600160a01b031614610d8a5760405162461bcd60e51b815260206004820152600b60248201526a13d3931657d5105491d15560aa1b60448201526064016106b4565b610ac881346115ab565b6000918252609a602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600082815260d0602052604081205415610e105760405162461bcd60e51b8152602060048201526012602482015271524551554553545f4e4f545f45584953545360701b60448201526064016106b4565b50600091825260cf6020908152604080842061ffff93909316845291905290205460ff1690565b333014610e725760405162461bcd60e51b815260206004820152600960248201526827a7262cafa9a2a62360b91b60448201526064016106b4565b610e80868686868686611919565b505050505050565b600054610100900460ff16610ea35760005460ff1615610ea7565b303b155b610f0a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106b4565b600054610100900460ff16158015610f2c576000805461ffff19166101011790555b610f37838386611a7c565b8015610f49576000805461ff00191690555b50505050565b6033546001600160a01b03163314610f795760405162461bcd60e51b81526004016106b49061282f565b6065546040516332fb62e760e21b81526001600160a01b039091169063cbed8b9c90610fb19088908890889088908890600401612882565b600060405180830381600087803b158015610fcb57600080fd5b505af1158015610fdf573d6000803e3d6000fd5b505050505050505050565b600080805b60cd548110156111295760cc5460cd805461ffff9092169183908110611017576110176128bb565b60009182526020909120601082040154600f9091166002026101000a900461ffff16146111175760655460cd805460009283926001600160a01b03909116916340a7bb1091908690811061106d5761106d6128bb565b90600052602060002090601091828204019190066002029054906101000a900461ffff16308960006040518563ffffffff1660e01b81526004016110b494939291906128d1565b604080518083038186803b1580156110cb57600080fd5b505afa1580156110df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611103919061291f565b90925090506111128285612959565b935050505b8061112181612971565b915050610fef565b5092915050565b6000828152609a602052604090206001015461114c81336113ab565b610a498383611495565b6033546001600160a01b031633146111805760405162461bcd60e51b81526004016106b49061282f565b61ffff8316600090815260666020526040902061119e90838361206e565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab8383836040516111d293929190612864565b60405180910390a1505050565b6033546001600160a01b031633146112095760405162461bcd60e51b81526004016106b49061282f565b6001600160a01b03811661126e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106b4565b61127781611559565b50565b606554604051633d7b2f6f60e21b815261ffff808716600483015285166024820152306044820152606481018390526060916001600160a01b03169063f5ecbdbc9060840160006040518083038186803b1580156112d757600080fd5b505afa1580156112eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611313919081019061298c565b95945050505050565b611334600080516020612c9883398151915233610d94565b61136d5760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa0a226a4a760b11b60448201526064016106b4565b61127781611abe565b60006001600160e01b03198216637965db0b60e01b14806108f857506301ffc9a760e01b6001600160e01b03198316146108f8565b6113b58282610d94565b610ac8576113cd816001600160a01b03166014611b12565b6113d8836020611b12565b6040516020016113e99291906129f9565b60408051601f198184030181529082905262461bcd60e51b82526106b49160040161254a565b6114198282610d94565b610ac8576000828152609a602090815260408083206001600160a01b03851684529091529020805460ff191660011790556114513390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61149f8282610d94565b15610ac8576000828152609a602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6040518181527f6930ee93026433301a14b1baa0b52ca0d4640cb1edaa703beeb9056e235269849060200160405180910390a1600090815260cf6020908152604080832061ffff909416835292905220805460ff19166001179055565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000804342856040516020016115c393929190612a6e565b604051602081830303815290604052805190602001209050600081856040516020016115f0929190612a9b565b60408051601f19818403018152918152600084815260d060205290812042905560cd54919250906001600160401b0381111561162e5761162e6123ce565b604051908082528060200260200182016040528015611657578160200160208202803683370190505b50905060005b60cd548110156118d35760cc5460cd805461ffff9092169183908110611685576116856128bb565b60009182526020909120601082040154600f9091166002026101000a900461ffff161461185a5761170660cd82815481106116c2576116c26128bb565b90600052602060002090601091828204019190066002029054906101000a900461ffff16846116ee3390565b6000604051806020016040528060008152508b611cb4565b60655460cd80546000926001600160a01b031691637a1457489185908110611730576117306128bb565b6000918252602090912060108204015460405160e084901b6001600160e01b0319168152600f9092166002026101000a900461ffff16600482015230602482015260440160206040518083038186803b15801561178c57600080fd5b505afa1580156117a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c49190612ac1565b9050808383815181106117d9576117d96128bb565b6001600160401b03909216602092830291909101820152600086815260cf9091526040812060cd805483919086908110611815576118156128bb565b60009182526020808320601083040154600f9092166002026101000a90910461ffff1683528201929092526040019020805460ff1916911515919091179055506118c1565b600084815260cf6020526040812060cd8054600193919085908110611881576118816128bb565b60009182526020808320601083040154600f9092166002026101000a90910461ffff1683528201929092526040019020805460ff19169115159190911790555b806118cb81612971565b91505061165d565b507fae089071e30b94e97da02b55d722e48117391d02604bfd9f4c0e345fe87327f133848360405161190793929190612ade565b60405180910390a15090949350505050565b60006119286020828486612b44565b61193191612b6e565b90506000611943602460208587612b44565b61194c91612b8c565b905036600061195e8560208189612b44565b90925090506001600160e01b0319831663565fbec360e01b148061198b575060ce546001600160a01b0316155b156119fa57600080306001600160a01b031684846040516119ad9291906127a9565b6000604051808303816000865af19150503d80600081146119ea576040519150601f19603f3d011682016040523d82523d6000602084013e6119ef565b606091505b50610fdf9350505050565b60ce5460405160009182916001600160a01b0390911690611a1e90869086906127a9565b6000604051808303816000865af19150503d8060008114611a5b576040519150601f19603f3d011682016040523d82523d6000602084013e611a60565b606091505b5091509150611a6f8b87611e0d565b5050505050505050505050565b600054610100900460ff16611aa35760405162461bcd60e51b81526004016106b490612bbc565b611aad8383611eb9565b611ab681611f41565b610a49611f71565b60ce80546001600160a01b0319166001600160a01b0383169081179091556040519081527f529334a1c6836c58fdfaae38f1bc5b62d6a69e91fc4181371b8cd8db71831ea79060200160405180910390a150565b60606000611b21836002612c07565b611b2c906002612959565b6001600160401b03811115611b4357611b436123ce565b6040519080825280601f01601f191660200182016040528015611b6d576020820181803683370190505b509050600360fc1b81600081518110611b8857611b886128bb565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611bb757611bb76128bb565b60200101906001600160f81b031916908160001a9053506000611bdb846002612c07565b611be6906001612959565b90505b6001811115611c5e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611c1a57611c1a6128bb565b1a60f81b828281518110611c3057611c306128bb565b60200101906001600160f81b031916908160001a90535060049490941c93611c5781612c26565b9050611be9565b508315611cad5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b4565b9392505050565b61ffff861660009081526066602052604081208054611cd29061276e565b80601f0160208091040260200160405190810160405280929190818152602001828054611cfe9061276e565b8015611d4b5780601f10611d2057610100808354040283529160200191611d4b565b820191906000526020600020905b815481529060010190602001808311611d2e57829003601f168201915b50505050509050805160001415611d975760405162461bcd60e51b815260206004820152601060248201526f4e4f545f54525553545f52454d4f544560801b60448201526064016106b4565b60655460405162c5803160e81b81526001600160a01b039091169063c5803100908490611dd2908b9086908c908c908c908c90600401612c3d565b6000604051808303818588803b158015611deb57600080fd5b505af1158015611dff573d6000803e3d6000fd5b505050505050505050505050565b6040805161ffff84168152602081018390527f48bea53beaca38b771579f7b305d61debf93516b22651d823243860173789e23910160405180910390a160cc5460405161ffff90911660248201526044810182905260009060640160408051601f198184030181529190526020810180516001600160e01b031663565fbec360e01b1790529050610a498382611ea03390565b6000604051806020016040528060008152506001611cb4565b600054610100900460ff16611ee05760405162461bcd60e51b81526004016106b490612bbc565b60cc805461ffff191661ffff84161790558051611f049060cd9060208401906120f2565b50611f1e600080516020612c988339815191526000611f98565b611f29600033611fe3565b610ac8600080516020612c9883398151915233611fe3565b600054610100900460ff16611f685760405162461bcd60e51b81526004016106b490612bbc565b61127781611fed565b600054610100900460ff16610c9d5760405162461bcd60e51b81526004016106b490612bbc565b6000828152609a6020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b610ac8828261140f565b600054610100900460ff166120145760405162461bcd60e51b81526004016106b490612bbc565b61201c61203e565b606580546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff166120655760405162461bcd60e51b81526004016106b490612bbc565b610c9d33611559565b82805461207a9061276e565b90600052602060002090601f01602090048101928261209c57600085556120e2565b82601f106120b55782800160ff198235161785556120e2565b828001600101855582156120e2579182015b828111156120e25782358255916020019190600101906120c7565b506120ee929150612192565b5090565b82805482825590600052602060002090600f016010900481019282156120e25791602002820160005b8382111561215b57835183826101000a81548161ffff021916908361ffff160217905550926020019260020160208160010104928301926001030261211b565b80156121895782816101000a81549061ffff021916905560020160208160010104928301926001030261215b565b50506120ee9291505b5b808211156120ee5760008155600101612193565b803561ffff811681146121b957600080fd5b919050565b60008083601f8401126121d057600080fd5b5081356001600160401b038111156121e757600080fd5b6020830191508360208285010111156121ff57600080fd5b9250929050565b6001600160401b038116811461127757600080fd5b6000806000806000806080878903121561223457600080fd5b61223d876121a7565b955060208701356001600160401b038082111561225957600080fd5b6122658a838b016121be565b90975095506040890135915061227a82612206565b9093506060880135908082111561229057600080fd5b5061229d89828a016121be565b979a9699509497509295939492505050565b6000602082840312156122c157600080fd5b81356001600160e01b031981168114611cad57600080fd5b6000602082840312156122eb57600080fd5b611cad826121a7565b60006020828403121561230657600080fd5b5035919050565b6001600160a01b038116811461127757600080fd5b6000806040838503121561233557600080fd5b8235915060208301356123478161230d565b809150509250929050565b60008060006040848603121561236757600080fd5b612370846121a7565b925060208401356001600160401b0381111561238b57600080fd5b612397868287016121be565b9497909650939450505050565b600080604083850312156123b757600080fd5b6123c0836121a7565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561240c5761240c6123ce565b604052919050565b60006001600160401b0382111561242d5761242d6123ce565b50601f01601f191660200190565b600082601f83011261244c57600080fd5b813561245f61245a82612414565b6123e4565b81815284602083860101111561247457600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156124a657600080fd5b6124af846121a7565b925060208401356001600160401b038111156124ca57600080fd5b6124d68682870161243b565b92505060408401356124e781612206565b809150509250925092565b60005b8381101561250d5781810151838201526020016124f5565b83811115610f495750506000910152565b600081518084526125368160208601602086016124f2565b601f01601f19169290920160200192915050565b602081526000611cad602083018461251e565b60006020828403121561256f57600080fd5b81356001600160401b0381111561258557600080fd5b6125918482850161243b565b949350505050565b600080604083850312156125ac57600080fd5b823591506125bc602084016121a7565b90509250929050565b6000806000606084860312156125da57600080fd5b83356125e58161230d565b925060206125f48582016121a7565b925060408501356001600160401b038082111561261057600080fd5b818701915087601f83011261262457600080fd5b813581811115612636576126366123ce565b8060051b91506126478483016123e4565b818152918301840191848101908a84111561266157600080fd5b938501935b8385101561268657612677856121a7565b82529385019390850190612666565b8096505050505050509250925092565b6000806000806000608086880312156126ae57600080fd5b6126b7866121a7565b94506126c5602087016121a7565b93506040860135925060608601356001600160401b038111156126e757600080fd5b6126f3888289016121be565b969995985093965092949392505050565b60006020828403121561271657600080fd5b8135611cad8161230d565b6000806000806080858703121561273757600080fd5b612740856121a7565b935061274e602086016121a7565b9250604085013561275e8161230d565b9396929550929360600135925050565b600181811c9082168061278257607f821691505b602082108114156127a357634e487b7160e01b600052602260045260246000fd5b50919050565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff871681526080602082015260006128006080830187896127b9565b6001600160401b038616604084015282810360608401526128228185876127b9565b9998505050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b61ffff841681526040602082015260006113136040830184866127b9565b600061ffff8088168352808716602084015250846040830152608060608301526128b06080830184866127b9565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b61ffff851681526001600160a01b038416602082015260a0604082018190526000906128ff9083018561251e565b921515606083015250808203608090910152600081526020019392505050565b6000806040838503121561293257600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601160045260246000fd5b6000821982111561296c5761296c612943565b500190565b600060001982141561298557612985612943565b5060010190565b60006020828403121561299e57600080fd5b81516001600160401b038111156129b457600080fd5b8201601f810184136129c557600080fd5b80516129d361245a82612414565b8181528560208385010111156129e857600080fd5b6113138260208301602086016124f2565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612a318160178501602088016124f2565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612a628160288401602088016124f2565b01602801949350505050565b83815282602082015260008251612a8c8160408501602087016124f2565b91909101604001949350505050565b82815260008251612ab38160208501602087016124f2565b919091016020019392505050565b600060208284031215612ad357600080fd5b8151611cad81612206565b6001600160a01b038416815260208082018490526060604083018190528351908301819052600091848101916080850190845b81811015612b365784516001600160401b031683529383019391830191600101612b11565b509098975050505050505050565b60008085851115612b5457600080fd5b83861115612b6157600080fd5b5050820193919092039150565b803560208310156108f857600019602084900360031b1b1692915050565b6001600160e01b03198135818116916004851015612bb45780818660040360031b1b83161692505b505092915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615612c2157612c21612943565b500290565b600081612c3557612c35612943565b506000190190565b61ffff8716815260c060208201526000612c5a60c083018861251e565b8281036040840152612c6c818861251e565b6001600160a01b0387811660608601528616608085015283810360a08501529050612822818561251e56fea49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a26469706673582212204f076927eed13ef9f547f57762937a7e6ff309531c53f3945e0084e6ee9f81d564736f6c63430008090033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): OmniRegistrarSynchronizerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniRegistrarSynchronizer;
}
