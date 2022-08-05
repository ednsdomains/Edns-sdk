import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { P256SHA256Algorithm, P256SHA256AlgorithmInterface } from "../P256SHA256Algorithm";
export declare class P256SHA256Algorithm__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<P256SHA256Algorithm>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): P256SHA256Algorithm;
    connect(signer: Signer): P256SHA256Algorithm__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611d24806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063de8f50a114610030575b600080fd5b61004a6004803603810190610045919061190e565b610060565b60405161005791906119dd565b60405180910390f35b600061015660028686604051610077929190611a37565b602060405180830381855afa158015610094573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906100b79190611a86565b61010485858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610162565b6101518a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506101f6565b61028a565b90509695505050505050565b61016a61185b565b60408251146101ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a590611b10565b60405180910390fd5b60405180604001604052806101cd60008561061b90919063ffffffff16565b60001c81526020016101e960208561061b90919063ffffffff16565b60001c8152509050919050565b6101fe61185b565b6044825114610242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023990611b7c565b60405180910390fd5b604051806040016040528061026160048561061b90919063ffffffff16565b60001c815260200161027d60248561061b90919063ffffffff16565b60001c8152509050919050565b600080836000600281106102a1576102a0611b9c565b5b602002015114806102ea57507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551836000600281106102e2576102e1611b9c565b5b602002015110155b8061030d575060008360016002811061030657610305611b9c565b5b6020020151145b1561031b5760009050610614565b6103558260006002811061033257610331611b9c565b5b60200201518360016002811061034b5761034a611b9c565b5b6020020151610646565b6103625760009050610614565b60008060008060006103ac8860016002811061038157610380611b9c565b5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255161088f565b905061042d7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f57fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518061042257610421611bcb565b5b848d60001c0961094d565b80945081965050506104b98760006002811061044c5761044b611b9c565b5b60200201518860016002811061046557610464611b9c565b5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518061049957610498611bcb565b5b848c6000600281106104ae576104ad611b9c565b5b60200201510961094d565b809350819550505060006104cf86858786610a53565b90506000816002600381106104e7576104e6611b9c565b5b602002015114156105015760009650505050505050610614565b60006105458260026003811061051a57610519611b9c565b5b60200201517fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61088f565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061057657610575611bcb565b5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806105a5576105a4611bcb565b5b828309836000600381106105bc576105bb611b9c565b5b6020020151099050896000600281106105d8576105d7611b9c565b5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551826106099190611c04565b149750505050505050505b9392505050565b6000825160208361062c9190611c64565b111561063757600080fd5b81602084010151905092915050565b6000826000148061067657507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff83145b806106815750816000145b806106ab57507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82145b156106b95760009050610889565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806106ea576106e9611bcb565b5b838409905060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806107205761071f611bcb565b5b857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806107505761074f611bcb565b5b87880909905060007fffffffff00000001000000000000000000000000fffffffffffffffffffffffc14610804577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806107ad576107ac611bcb565b5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806107dc576107db611bcb565b5b7fffffffff00000001000000000000000000000000fffffffffffffffffffffffc8709820890505b60007f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b14610881577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061085b5761085a611bcb565b5b7f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b820890505b808214925050505b92915050565b60008083148061089e57508183145b806108a95750600082145b156108b75760009050610947565b818311156108d3578183816108cf576108ce611bcb565b5b0692505b600080600190506000849050600086905060005b60008214610923578183816108ff576108fe611bcb565b5b049050838482028603838484028603809550819650829750839850505050506108e7565b600085121561093e5784600003870395505050505050610947565b84955050505050505b92915050565b600080600083141561096a57610961610a88565b91509150610a4b565b600183141561097e57848491509150610a4b565b600283141561099a576109918585610a96565b91509150610a4b565b6000859050600085905060006001905060006001905088955087945060006002886109c59190611c04565b14156109d357600094508495505b600187901c96505b6000871115610a37576109ef848484610aca565b8094508195508296505050506001600288610a0a9190611c04565b1415610a2b57610a1e848484898986611027565b8093508197508298505050505b600187901c96506109db565b610a428686836111e0565b95509550505050505b935093915050565b610a5b61187d565b600080610a6a87878787611282565b8092508193505050610a7c82826112bc565b92505050949350505050565b600080600080915091509091565b6000806000610aa785856001610aca565b809350819650829750505050610abe8585836111e0565b92509250509250929050565b6000806000806000806000610adf8a8a6113e9565b15610afb57610aec611413565b9650965096505050505061101e565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610b2a57610b29611bcb565b5b888a0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610b5e57610b5d611bcb565b5b6002840992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610b9357610b92611bcb565b5b8a840991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610bc757610bc6611bcb565b5b89830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610bfb57610bfa611bcb565b5b6002830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610c3057610c2f611bcb565b5b8a8b0999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610c6457610c63611bcb565b5b60038b0993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610c9957610c98611bcb565b5b88890997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610ccd57610ccc611bcb565b5b7fffffffff00000001000000000000000000000000fffffffffffffffffffffffc890997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610d2157610d20611bcb565b5b88850893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610d5557610d54611bcb565b5b84850990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610d8957610d88611bcb565b5b8260020999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610dbe57610dbd611bcb565b5b8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff610dea9190611cba565b820890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610e1d57610e1c611bcb565b5b817fffffffff00000001000000000000000000000000ffffffffffffffffffffffff610e499190611cba565b830899507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610e7c57610e7b611bcb565b5b8a850999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610eb057610eaf611bcb565b5b838a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610ee457610ee3611bcb565b5b898a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f1857610f17611bcb565b5b8960020998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f4d57610f4c611bcb565b5b897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff610f799190611cba565b8b0895507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610fac57610fab611bcb565b5b81840996507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610fe057610fdf611bcb565b5b83840994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061101457611013611bcb565b5b8386099450505050505b93509350939050565b600080600080600080600061103c8d8d6113e9565b1561105357898989965096509650505050506111d4565b61105d8a8a6113e9565b15611074578c8c8c965096509650505050506111d4565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806110a3576110a2611bcb565b5b888d0993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806110d7576110d6611bcb565b5b8b8a0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061110b5761110a611bcb565b5b888e0991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061113f5761113e611bcb565b5b8b8b09905080821415611185578284141561116e5761115f8d8d8d610aca565b965096509650505050506111d4565b611176611413565b965096509650505050506111d4565b6111c37fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806111b7576111b6611bcb565b5b898d0983838688611428565b809750819850829950505050505050505b96509650969350505050565b600080600061120f847fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61088f565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806112405761123f611bcb565b5b81870992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061127457611273611bcb565b5b818609915050935093915050565b60008060006112978787600188886001611027565b8093508198508299505050506112ae8787836111e0565b925092505094509492505050565b6112c461187d565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806112f3576112f2611bcb565b5b60016000088160026003811061130c5761130b611b9c565b5b6020020181815250507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061134457611343611bcb565b5b8160026003811061135857611357611b9c565b5b602002015184098160006003811061137357611372611b9c565b5b6020020181815250507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806113ab576113aa611bcb565b5b816002600381106113bf576113be611b9c565b5b60200201518309816001600381106113da576113d9611b9c565b5b60200201818152505092915050565b600080831480156113fa5750600082145b15611408576001905061140d565b600090505b92915050565b60008060008060016000925092509250909192565b6000806000806000806000807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061146357611462611bcb565b5b8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61148f9190611cba565b8a0890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806114c2576114c1611bcb565b5b8b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff6114ee9190611cba565b8d0894507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061152157611520611bcb565b5b85860993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061155557611554611bcb565b5b81820991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061158957611588611bcb565b5b8d830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806115bd576115bc611bcb565b5b8c8c089a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806115f1576115f0611bcb565b5b848c099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061162557611624611bcb565b5b8b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff6116519190611cba565b830891507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061168457611683611bcb565b5b82860997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806116b8576116b7611bcb565b5b85850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806116ec576116eb611bcb565b5b848d099b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806117205761171f611bcb565b5b827fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61174c9190611cba565b8d089b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061177f5761177e611bcb565b5b8c820990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806117b3576117b2611bcb565b5b838a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806117e7576117e6611bcb565b5b897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff6118139190611cba565b820896507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061184657611845611bcb565b5b8d840995505050505050955095509592505050565b6040518060400160405280600290602082028036833780820191505090505090565b6040518060600160405280600390602082028036833780820191505090505090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126118ce576118cd6118a9565b5b8235905067ffffffffffffffff8111156118eb576118ea6118ae565b5b602083019150836001820283011115611907576119066118b3565b5b9250929050565b6000806000806000806060878903121561192b5761192a61189f565b5b600087013567ffffffffffffffff811115611949576119486118a4565b5b61195589828a016118b8565b9650965050602087013567ffffffffffffffff811115611978576119776118a4565b5b61198489828a016118b8565b9450945050604087013567ffffffffffffffff8111156119a7576119a66118a4565b5b6119b389828a016118b8565b92509250509295509295509295565b60008115159050919050565b6119d7816119c2565b82525050565b60006020820190506119f260008301846119ce565b92915050565b600081905092915050565b82818337600083830152505050565b6000611a1e83856119f8565b9350611a2b838584611a03565b82840190509392505050565b6000611a44828486611a12565b91508190509392505050565b6000819050919050565b611a6381611a50565b8114611a6e57600080fd5b50565b600081519050611a8081611a5a565b92915050565b600060208284031215611a9c57611a9b61189f565b5b6000611aaa84828501611a71565b91505092915050565b600082825260208201905092915050565b7f496e76616c69642070323536207369676e6174757265206c656e677468000000600082015250565b6000611afa601d83611ab3565b9150611b0582611ac4565b602082019050919050565b60006020820190508181036000830152611b2981611aed565b9050919050565b7f496e76616c69642070323536206b6579206c656e677468000000000000000000600082015250565b6000611b66601783611ab3565b9150611b7182611b30565b602082019050919050565b60006020820190508181036000830152611b9581611b59565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000819050919050565b6000611c0f82611bfa565b9150611c1a83611bfa565b925082611c2a57611c29611bcb565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c6f82611bfa565b9150611c7a83611bfa565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611caf57611cae611c35565b5b828201905092915050565b6000611cc582611bfa565b9150611cd083611bfa565b925082821015611ce357611ce2611c35565b5b82820390509291505056fea2646970667358221220eaf0cfd44a2bcc3821fdbf3623827dccc1af8151c8c4ddb60315f91c09367a0664736f6c634300080a0033";
    static readonly abi: {
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
    }[];
    static createInterface(): P256SHA256AlgorithmInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): P256SHA256Algorithm;
}
