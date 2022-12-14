/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ERC2981MockInterface extends utils.Interface {
  functions: {
    "addRoyaltyInfo(uint256,address,uint16)": FunctionFragment;
    "feeDenominator()": FunctionFragment;
    "resetTokenRoyalty(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRoyaltyInfo"
      | "feeDenominator"
      | "resetTokenRoyalty"
      | "royaltyInfo"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRoyaltyInfo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "feeDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resetTokenRoyalty",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRoyaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetTokenRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "AddRoyaltyInfo(uint256,address,uint16)": EventFragment;
    "ResetTokenRoyalty(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddRoyaltyInfo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResetTokenRoyalty"): EventFragment;
}

export interface AddRoyaltyInfoEventObject {
  tokenId: BigNumber;
  receiver: string;
  feeNumerator: number;
}
export type AddRoyaltyInfoEvent = TypedEvent<
  [BigNumber, string, number],
  AddRoyaltyInfoEventObject
>;

export type AddRoyaltyInfoEventFilter = TypedEventFilter<AddRoyaltyInfoEvent>;

export interface ResetTokenRoyaltyEventObject {
  tokenId: BigNumber;
}
export type ResetTokenRoyaltyEvent = TypedEvent<
  [BigNumber],
  ResetTokenRoyaltyEventObject
>;

export type ResetTokenRoyaltyEventFilter =
  TypedEventFilter<ResetTokenRoyaltyEvent>;

export interface ERC2981Mock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC2981MockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addRoyaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      feeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeDenominator(overrides?: CallOverrides): Promise<[number]>;

    resetTokenRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addRoyaltyInfo(
    tokenId: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    feeNumerator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeDenominator(overrides?: CallOverrides): Promise<number>;

  resetTokenRoyalty(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  royaltyInfo(
    tokenId: PromiseOrValue<BigNumberish>,
    salePrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addRoyaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      feeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    feeDenominator(overrides?: CallOverrides): Promise<number>;

    resetTokenRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AddRoyaltyInfo(uint256,address,uint16)"(
      tokenId?: null,
      receiver?: null,
      feeNumerator?: null
    ): AddRoyaltyInfoEventFilter;
    AddRoyaltyInfo(
      tokenId?: null,
      receiver?: null,
      feeNumerator?: null
    ): AddRoyaltyInfoEventFilter;

    "ResetTokenRoyalty(uint256)"(tokenId?: null): ResetTokenRoyaltyEventFilter;
    ResetTokenRoyalty(tokenId?: null): ResetTokenRoyaltyEventFilter;
  };

  estimateGas: {
    addRoyaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      feeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    resetTokenRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRoyaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      feeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeDenominator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resetTokenRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
