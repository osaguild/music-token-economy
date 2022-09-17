/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Protocol, ProtocolInterface } from "../../contracts/Protocol";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "apy",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOfReward",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOfStaking",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "mintable",
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
    name: "owner",
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
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mteAmount",
        type: "uint256",
      },
    ],
    name: "provideLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mteToken",
        type: "address",
      },
    ],
    name: "setMteToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakingToken",
        type: "address",
      },
    ],
    name: "setStakingToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
  "0x6080604052612710600060166101000a81548161ffff021916908361ffff1602179055503480156200003057600080fd5b506040516200178c3803806200178c833981810160405281019062000056919062000235565b620000766200006a620000a060201b60201c565b620000a860201b60201c565b6200008782620000a860201b60201c565b62000098816200016c60201b60201c565b50506200027c565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600060146101000a81548161ffff021916908361ffff16021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001be8262000191565b9050919050565b620001d081620001b1565b8114620001dc57600080fd5b50565b600081519050620001f081620001c5565b92915050565b600061ffff82169050919050565b6200020f81620001f6565b81146200021b57600080fd5b50565b6000815190506200022f8162000204565b92915050565b600080604083850312156200024f576200024e6200018c565b5b60006200025f85828601620001df565b925050602062000272858286016200021e565b9150509250929050565b611500806200028c6000396000f3fe60806040526004361061009c5760003560e01c80635ca3dee7116100645780635ca3dee714610189578063715018a6146101c657806385d0ba51146101dd5780638da5cb5b14610206578063a694fc3a14610231578063f2fde38b1461025a5761009c565b80630e16e991146100a15780631e9b12ef146100de5780632bb9c958146101075780632e1a7d4d1461012357806359441eae1461014c575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c39190610d9e565b610283565b6040516100d59190610de4565b60405180910390f35b3480156100ea57600080fd5b5061010560048036038101906101009190610d9e565b6102ab565b005b610121600480360381019061011c9190610e69565b6102f7565b005b34801561012f57600080fd5b5061014a60048036038101906101459190610ebc565b6103da565b005b34801561015857600080fd5b50610173600480360381019061016e9190610d9e565b610619565b6040516101809190610f04565b60405180910390f35b34801561019557600080fd5b506101b060048036038101906101ab9190610d9e565b610637565b6040516101bd9190610de4565b60405180910390f35b3480156101d257600080fd5b506101db610652565b005b3480156101e957600080fd5b5061020460048036038101906101ff9190610d9e565b610666565b005b34801561021257600080fd5b5061021b6106b2565b6040516102289190610f2e565b60405180910390f35b34801561023d57600080fd5b5061025860048036038101906102539190610ebc565b6106db565b005b34801561026657600080fd5b50610281600480360381019061027c9190610d9e565b610862565b005b60008061028f836108e6565b90506102a381604001518260200151610a61565b915050919050565b6102b3610ac5565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6102ff610ac5565b8273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610345573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1984836040518363ffffffff1660e01b81526004016103a3929190610fa8565b600060405180830381600087803b1580156103bd57600080fd5b505af11580156103d1573d6000803e3d6000fd5b50505050505050565b60006103ec6103e7610b43565b6108e6565b9050600081604001511415610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d9061102e565b60405180910390fd5b818160400151101561047d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104749061109a565b60405180910390fd5b600061048d838360200151610a61565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6104d5610b43565b83866104e191906110e9565b6040518363ffffffff1660e01b81526004016104fe92919061113f565b602060405180830381600087803b15801561051857600080fd5b505af115801561052c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105509190611194565b5061057661055c610b43565b84846040015161056c91906111c1565b8460600151610b4b565b828260400151141561061457600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6883606001516040518263ffffffff1660e01b81526004016105e19190610de4565b600060405180830381600087803b1580156105fb57600080fd5b505af115801561060f573d6000803e3d6000fd5b505050505b505050565b600080610625836108e6565b90506000816040015111915050919050565b600080610643836108e6565b90508060400151915050919050565b61065a610ac5565b6106646000610c15565b565b61066e610ac5565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd610721610b43565b30846040518463ffffffff1660e01b8152600401610741939291906111f5565b602060405180830381600087803b15801561075b57600080fd5b505af115801561076f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107939190611194565b506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0def5216107dc610b43565b6040518263ffffffff1660e01b81526004016107f89190611278565b602060405180830381600087803b15801561081257600080fd5b505af1158015610826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084a91906112bb565b905061085e610857610b43565b8383610b4b565b5050565b61086a610ac5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d19061135a565b60405180910390fd5b6108e381610c15565b50565b6108ee610cfd565b60006108fa6003610cd9565b90505b6000811115610a1d578273ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a0a57600460008281526020019081526020016000206040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050915050610a5c565b8080610a159061137a565b9150506108fd565b506040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090505b919050565b6000808243610a7091906111c1565b9050600060169054906101000a900461ffff1661ffff1684600060149054906101000a900461ffff1661ffff1683610aa891906113a4565b610ab291906113a4565b610abc919061142d565b91505092915050565b610acd610b43565b73ffffffffffffffffffffffffffffffffffffffff16610aeb6106b2565b73ffffffffffffffffffffffffffffffffffffffff1614610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b38906114aa565b60405180910390fd5b565b600033905090565b610b556003610ce7565b60405180608001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020014381526020018381526020018281525060046000610b9a6003610cd9565b815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155905050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d6b82610d40565b9050919050565b610d7b81610d60565b8114610d8657600080fd5b50565b600081359050610d9881610d72565b92915050565b600060208284031215610db457610db3610d3b565b5b6000610dc284828501610d89565b91505092915050565b6000819050919050565b610dde81610dcb565b82525050565b6000602082019050610df96000830184610dd5565b92915050565b6000610e0a82610d40565b9050919050565b610e1a81610dff565b8114610e2557600080fd5b50565b600081359050610e3781610e11565b92915050565b610e4681610dcb565b8114610e5157600080fd5b50565b600081359050610e6381610e3d565b92915050565b600080600060608486031215610e8257610e81610d3b565b5b6000610e9086828701610e28565b9350506020610ea186828701610e54565b9250506040610eb286828701610e54565b9150509250925092565b600060208284031215610ed257610ed1610d3b565b5b6000610ee084828501610e54565b91505092915050565b60008115159050919050565b610efe81610ee9565b82525050565b6000602082019050610f196000830184610ef5565b92915050565b610f2881610d60565b82525050565b6000602082019050610f436000830184610f1f565b92915050565b6000819050919050565b6000610f6e610f69610f6484610d40565b610f49565b610d40565b9050919050565b6000610f8082610f53565b9050919050565b6000610f9282610f75565b9050919050565b610fa281610f87565b82525050565b6000604082019050610fbd6000830185610f99565b610fca6020830184610dd5565b9392505050565b600082825260208201905092915050565b7f50726f746f636f6c3a207374616b696e67206e6f7420666f756e640000000000600082015250565b6000611018601b83610fd1565b915061102382610fe2565b602082019050919050565b600060208201905081810360008301526110478161100b565b9050919050565b7f50726f746f636f6c3a207374616b696e67206973206e6f7420656e6f75676800600082015250565b6000611084601f83610fd1565b915061108f8261104e565b602082019050919050565b600060208201905081810360008301526110b381611077565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110f482610dcb565b91506110ff83610dcb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611134576111336110ba565b5b828201905092915050565b60006040820190506111546000830185610f1f565b6111616020830184610dd5565b9392505050565b61117181610ee9565b811461117c57600080fd5b50565b60008151905061118e81611168565b92915050565b6000602082840312156111aa576111a9610d3b565b5b60006111b88482850161117f565b91505092915050565b60006111cc82610dcb565b91506111d783610dcb565b9250828210156111ea576111e96110ba565b5b828203905092915050565b600060608201905061120a6000830186610f1f565b6112176020830185610f1f565b6112246040830184610dd5565b949350505050565b7f68747470733a2f2f6f73616775696c642e636f6d2f0000000000000000000000600082015250565b6000611262601583610fd1565b915061126d8261122c565b602082019050919050565b600060408201905061128d6000830184610f1f565b818103602083015261129e81611255565b905092915050565b6000815190506112b581610e3d565b92915050565b6000602082840312156112d1576112d0610d3b565b5b60006112df848285016112a6565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611344602683610fd1565b915061134f826112e8565b604082019050919050565b6000602082019050818103600083015261137381611337565b9050919050565b600061138582610dcb565b91506000821415611399576113986110ba565b5b600182039050919050565b60006113af82610dcb565b91506113ba83610dcb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113f3576113f26110ba565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061143882610dcb565b915061144383610dcb565b925082611453576114526113fe565b5b828204905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611494602083610fd1565b915061149f8261145e565b602082019050919050565b600060208201905081810360008301526114c381611487565b905091905056fea2646970667358221220eca02216de4d6d52459c613d69bda0645a99025d9b9f4b0778d087855a88e09c64736f6c63430008090033";

type ProtocolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Protocol__factory extends ContractFactory {
  constructor(...args: ProtocolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    apy: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Protocol> {
    return super.deploy(owner, apy, overrides || {}) as Promise<Protocol>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    apy: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, apy, overrides || {});
  }
  override attach(address: string): Protocol {
    return super.attach(address) as Protocol;
  }
  override connect(signer: Signer): Protocol__factory {
    return super.connect(signer) as Protocol__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolInterface {
    return new utils.Interface(_abi) as ProtocolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Protocol {
    return new Contract(address, _abi, signerOrProvider) as Protocol;
  }
}