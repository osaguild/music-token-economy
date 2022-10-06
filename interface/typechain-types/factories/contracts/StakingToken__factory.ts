/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StakingToken,
  StakingTokenInterface,
} from "../../contracts/StakingToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620031e8380380620031e88339818101604052810190620000379190620002f7565b6040518060400160405280600c81526020017f5374616b696e67546f6b656e00000000000000000000000000000000000000008152506040518060400160405280600781526020017f5354414b494e47000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb929190620001dd565b508060019080519060200190620000d4929190620001dd565b505050620000f7620000eb6200010f60201b60201c565b6200011760201b60201c565b62000108816200011760201b60201c565b506200038e565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001eb9062000358565b90600052602060002090601f0160209004810192826200020f57600085556200025b565b82601f106200022a57805160ff19168380011785556200025b565b828001600101855582156200025b579182015b828111156200025a5782518255916020019190600101906200023d565b5b5090506200026a91906200026e565b5090565b5b80821115620002895760008160009055506001016200026f565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002bf8262000292565b9050919050565b620002d181620002b2565b8114620002dd57600080fd5b50565b600081519050620002f181620002c6565b92915050565b60006020828403121562000310576200030f6200028d565b5b60006200032084828501620002e0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200037157607f821691505b6020821081141562000388576200038762000329565b5b50919050565b612e4a806200039e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde146102f4578063c87b56dd14610310578063d0def52114610340578063e985e9c514610370578063f2fde38b146103a057610121565b806370a0823114610262578063715018a6146102925780638da5cb5b1461029c57806395d89b41146102ba578063a22cb465146102d857610121565b806318160ddd116100f457806318160ddd146101c057806323b872dd146101de57806342842e0e146101fa57806342966c68146102165780636352211e1461023257610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611d1c565b6103bc565b60405161014d9190611d64565b60405180910390f35b61015e61049e565b60405161016b9190611e18565b60405180910390f35b61018e60048036038101906101899190611e70565b610530565b60405161019b9190611ede565b60405180910390f35b6101be60048036038101906101b99190611f25565b610576565b005b6101c861068e565b6040516101d59190611f74565b60405180910390f35b6101f860048036038101906101f39190611f8f565b61069f565b005b610214600480360381019061020f9190611f8f565b6106ff565b005b610230600480360381019061022b9190611e70565b61071f565b005b61024c60048036038101906102479190611e70565b610733565b6040516102599190611ede565b60405180910390f35b61027c60048036038101906102779190611fe2565b6107e5565b6040516102899190611f74565b60405180910390f35b61029a61089d565b005b6102a46108b1565b6040516102b19190611ede565b60405180910390f35b6102c26108db565b6040516102cf9190611e18565b60405180910390f35b6102f260048036038101906102ed919061203b565b61096d565b005b61030e600480360381019061030991906121b0565b610983565b005b61032a60048036038101906103259190611e70565b6109e5565b6040516103379190611e18565b60405180910390f35b61035a600480360381019061035591906122d4565b610af8565b6040516103679190611f74565b60405180910390f35b61038a60048036038101906103859190612330565b610b44565b6040516103979190611d64565b60405180910390f35b6103ba60048036038101906103b59190611fe2565b610bd8565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061048757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610497575061049682610c5c565b5b9050919050565b6060600080546104ad9061239f565b80601f01602080910402602001604051908101604052809291908181526020018280546104d99061239f565b80156105265780601f106104fb57610100808354040283529160200191610526565b820191906000526020600020905b81548152906001019060200180831161050957829003601f168201915b5050505050905090565b600061053b82610cc6565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061058182610733565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e990612443565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610611610d11565b73ffffffffffffffffffffffffffffffffffffffff161480610640575061063f8161063a610d11565b610b44565b5b61067f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610676906124d5565b60405180910390fd5b6106898383610d19565b505050565b600061069a6008610dd2565b905090565b6106b06106aa610d11565b82610de0565b6106ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e690612567565b60405180910390fd5b6106fa838383610e75565b505050565b61071a83838360405180602001604052806000815250610983565b505050565b6107276110dc565b6107308161115a565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d3906125d3565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610856576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d90612665565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108a56110dc565b6108af60006111ad565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546108ea9061239f565b80601f01602080910402602001604051908101604052809291908181526020018280546109169061239f565b80156109635780601f1061093857610100808354040283529160200191610963565b820191906000526020600020905b81548152906001019060200180831161094657829003601f168201915b5050505050905090565b61097f610978610d11565b8383611273565b5050565b61099461098e610d11565b83610de0565b6109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90612567565b60405180910390fd5b6109df848484846113e0565b50505050565b60606109f082610cc6565b6000600660008481526020019081526020016000208054610a109061239f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3c9061239f565b8015610a895780601f10610a5e57610100808354040283529160200191610a89565b820191906000526020600020905b815481529060010190602001808311610a6c57829003601f168201915b505050505090506000610a9a61143c565b9050600081511415610ab0578192505050610af3565b600082511115610ae5578082604051602001610acd9291906126c1565b60405160208183030381529060405292505050610af3565b610aee84611453565b925050505b919050565b6000610b026110dc565b610b0c60086114bb565b610b1f83610b1a6008610dd2565b6114d1565b610b32610b2c6008610dd2565b836116ab565b610b3c6008610dd2565b905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610be06110dc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4790612757565b60405180910390fd5b610c59816111ad565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ccf8161171f565b610d0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d05906125d3565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d8c83610733565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080610dec83610733565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e2e5750610e2d8185610b44565b5b80610e6c57508373ffffffffffffffffffffffffffffffffffffffff16610e5484610530565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e9582610733565b73ffffffffffffffffffffffffffffffffffffffff1614610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee2906127e9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f529061287b565b60405180910390fd5b610f6683838361178b565b610f71600082610d19565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fc191906128ca565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461101891906128fe565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110d7838383611790565b505050565b6110e4610d11565b73ffffffffffffffffffffffffffffffffffffffff166111026108b1565b73ffffffffffffffffffffffffffffffffffffffff1614611158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114f906129a0565b60405180910390fd5b565b61116381611795565b60006006600083815260200190815260200160002080546111839061239f565b9050146111aa576006600082815260200190815260200160002060006111a99190611bcd565b5b50565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d990612a0c565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113d39190611d64565b60405180910390a3505050565b6113eb848484610e75565b6113f7848484846118b2565b611436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142d90612a9e565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061145e82610cc6565b600061146861143c565b9050600081511161148857604051806020016040528060008152506114b3565b8061149284611a49565b6040516020016114a39291906126c1565b6040516020818303038152906040525b915050919050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153890612b0a565b60405180910390fd5b61154a8161171f565b1561158a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158190612b76565b60405180910390fd5b6115966000838361178b565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115e691906128fe565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46116a760008383611790565b5050565b6116b48261171f565b6116f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ea90612c08565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061171a929190611c0d565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006117a082610733565b90506117ae8160008461178b565b6117b9600083610d19565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461180991906128ca565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46118ae81600084611790565b5050565b60006118d38473ffffffffffffffffffffffffffffffffffffffff16611baa565b15611a3c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118fc610d11565b8786866040518563ffffffff1660e01b815260040161191e9493929190612c7d565b602060405180830381600087803b15801561193857600080fd5b505af192505050801561196957506040513d601f19601f820116820180604052508101906119669190612cde565b60015b6119ec573d8060008114611999576040519150601f19603f3d011682016040523d82523d6000602084013e61199e565b606091505b506000815114156119e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119db90612a9e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a41565b600190505b949350505050565b60606000821415611a91576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611ba5565b600082905060005b60008214611ac3578080611aac90612d0b565b915050600a82611abc9190612d83565b9150611a99565b60008167ffffffffffffffff811115611adf57611ade612085565b5b6040519080825280601f01601f191660200182016040528015611b115781602001600182028036833780820191505090505b5090505b60008514611b9e57600182611b2a91906128ca565b9150600a85611b399190612db4565b6030611b4591906128fe565b60f81b818381518110611b5b57611b5a612de5565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b979190612d83565b9450611b15565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b508054611bd99061239f565b6000825580601f10611beb5750611c0a565b601f016020900490600052602060002090810190611c099190611c93565b5b50565b828054611c199061239f565b90600052602060002090601f016020900481019282611c3b5760008555611c82565b82601f10611c5457805160ff1916838001178555611c82565b82800160010185558215611c82579182015b82811115611c81578251825591602001919060010190611c66565b5b509050611c8f9190611c93565b5090565b5b80821115611cac576000816000905550600101611c94565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611cf981611cc4565b8114611d0457600080fd5b50565b600081359050611d1681611cf0565b92915050565b600060208284031215611d3257611d31611cba565b5b6000611d4084828501611d07565b91505092915050565b60008115159050919050565b611d5e81611d49565b82525050565b6000602082019050611d796000830184611d55565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611db9578082015181840152602081019050611d9e565b83811115611dc8576000848401525b50505050565b6000601f19601f8301169050919050565b6000611dea82611d7f565b611df48185611d8a565b9350611e04818560208601611d9b565b611e0d81611dce565b840191505092915050565b60006020820190508181036000830152611e328184611ddf565b905092915050565b6000819050919050565b611e4d81611e3a565b8114611e5857600080fd5b50565b600081359050611e6a81611e44565b92915050565b600060208284031215611e8657611e85611cba565b5b6000611e9484828501611e5b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ec882611e9d565b9050919050565b611ed881611ebd565b82525050565b6000602082019050611ef36000830184611ecf565b92915050565b611f0281611ebd565b8114611f0d57600080fd5b50565b600081359050611f1f81611ef9565b92915050565b60008060408385031215611f3c57611f3b611cba565b5b6000611f4a85828601611f10565b9250506020611f5b85828601611e5b565b9150509250929050565b611f6e81611e3a565b82525050565b6000602082019050611f896000830184611f65565b92915050565b600080600060608486031215611fa857611fa7611cba565b5b6000611fb686828701611f10565b9350506020611fc786828701611f10565b9250506040611fd886828701611e5b565b9150509250925092565b600060208284031215611ff857611ff7611cba565b5b600061200684828501611f10565b91505092915050565b61201881611d49565b811461202357600080fd5b50565b6000813590506120358161200f565b92915050565b6000806040838503121561205257612051611cba565b5b600061206085828601611f10565b925050602061207185828601612026565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6120bd82611dce565b810181811067ffffffffffffffff821117156120dc576120db612085565b5b80604052505050565b60006120ef611cb0565b90506120fb82826120b4565b919050565b600067ffffffffffffffff82111561211b5761211a612085565b5b61212482611dce565b9050602081019050919050565b82818337600083830152505050565b600061215361214e84612100565b6120e5565b90508281526020810184848401111561216f5761216e612080565b5b61217a848285612131565b509392505050565b600082601f8301126121975761219661207b565b5b81356121a7848260208601612140565b91505092915050565b600080600080608085870312156121ca576121c9611cba565b5b60006121d887828801611f10565b94505060206121e987828801611f10565b93505060406121fa87828801611e5b565b925050606085013567ffffffffffffffff81111561221b5761221a611cbf565b5b61222787828801612182565b91505092959194509250565b600067ffffffffffffffff82111561224e5761224d612085565b5b61225782611dce565b9050602081019050919050565b600061227761227284612233565b6120e5565b90508281526020810184848401111561229357612292612080565b5b61229e848285612131565b509392505050565b600082601f8301126122bb576122ba61207b565b5b81356122cb848260208601612264565b91505092915050565b600080604083850312156122eb576122ea611cba565b5b60006122f985828601611f10565b925050602083013567ffffffffffffffff81111561231a57612319611cbf565b5b612326858286016122a6565b9150509250929050565b6000806040838503121561234757612346611cba565b5b600061235585828601611f10565b925050602061236685828601611f10565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806123b757607f821691505b602082108114156123cb576123ca612370565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061242d602183611d8a565b9150612438826123d1565b604082019050919050565b6000602082019050818103600083015261245c81612420565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006124bf603e83611d8a565b91506124ca82612463565b604082019050919050565b600060208201905081810360008301526124ee816124b2565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612551602e83611d8a565b915061255c826124f5565b604082019050919050565b6000602082019050818103600083015261258081612544565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006125bd601883611d8a565b91506125c882612587565b602082019050919050565b600060208201905081810360008301526125ec816125b0565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061264f602983611d8a565b915061265a826125f3565b604082019050919050565b6000602082019050818103600083015261267e81612642565b9050919050565b600081905092915050565b600061269b82611d7f565b6126a58185612685565b93506126b5818560208601611d9b565b80840191505092915050565b60006126cd8285612690565b91506126d98284612690565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612741602683611d8a565b915061274c826126e5565b604082019050919050565b6000602082019050818103600083015261277081612734565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006127d3602583611d8a565b91506127de82612777565b604082019050919050565b60006020820190508181036000830152612802816127c6565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612865602483611d8a565b915061287082612809565b604082019050919050565b6000602082019050818103600083015261289481612858565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128d582611e3a565b91506128e083611e3a565b9250828210156128f3576128f261289b565b5b828203905092915050565b600061290982611e3a565b915061291483611e3a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129495761294861289b565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061298a602083611d8a565b915061299582612954565b602082019050919050565b600060208201905081810360008301526129b98161297d565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006129f6601983611d8a565b9150612a01826129c0565b602082019050919050565b60006020820190508181036000830152612a25816129e9565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a88603283611d8a565b9150612a9382612a2c565b604082019050919050565b60006020820190508181036000830152612ab781612a7b565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612af4602083611d8a565b9150612aff82612abe565b602082019050919050565b60006020820190508181036000830152612b2381612ae7565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612b60601c83611d8a565b9150612b6b82612b2a565b602082019050919050565b60006020820190508181036000830152612b8f81612b53565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612bf2602e83611d8a565b9150612bfd82612b96565b604082019050919050565b60006020820190508181036000830152612c2181612be5565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612c4f82612c28565b612c598185612c33565b9350612c69818560208601611d9b565b612c7281611dce565b840191505092915050565b6000608082019050612c926000830187611ecf565b612c9f6020830186611ecf565b612cac6040830185611f65565b8181036060830152612cbe8184612c44565b905095945050505050565b600081519050612cd881611cf0565b92915050565b600060208284031215612cf457612cf3611cba565b5b6000612d0284828501612cc9565b91505092915050565b6000612d1682611e3a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d4957612d4861289b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612d8e82611e3a565b9150612d9983611e3a565b925082612da957612da8612d54565b5b828204905092915050565b6000612dbf82611e3a565b9150612dca83611e3a565b925082612dda57612dd9612d54565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212203f503eab70d8107447f70c33a2a56fd7634c6ce25a83c48cf19828d2532c8bcd64736f6c63430008090033";

type StakingTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingToken__factory extends ContractFactory {
  constructor(...args: StakingTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingToken> {
    return super.deploy(owner, overrides || {}) as Promise<StakingToken>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): StakingToken {
    return super.attach(address) as StakingToken;
  }
  override connect(signer: Signer): StakingToken__factory {
    return super.connect(signer) as StakingToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingTokenInterface {
    return new utils.Interface(_abi) as StakingTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingToken {
    return new Contract(address, _abi, signerOrProvider) as StakingToken;
  }
}