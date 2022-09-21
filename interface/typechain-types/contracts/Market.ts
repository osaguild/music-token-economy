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
  PayableOverrides,
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
} from "../common";

export declare namespace IMarket {
  export type SaleStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    buyer: PromiseOrValue<string>;
    startBlockNumber: PromiseOrValue<BigNumberish>;
    endBlockNumber: PromiseOrValue<BigNumberish>;
    isSold: PromiseOrValue<boolean>;
  };

  export type SaleStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    tokenId: BigNumber;
    price: BigNumber;
    buyer: string;
    startBlockNumber: BigNumber;
    endBlockNumber: BigNumber;
    isSold: boolean;
  };
}

export interface MarketInterface extends utils.Interface {
  functions: {
    "closeSale(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "purchase(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sale(uint256)": FunctionFragment;
    "setFanficToken(address)": FunctionFragment;
    "startSale(uint256,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "closeSale"
      | "owner"
      | "purchase"
      | "renounceOwnership"
      | "sale"
      | "setFanficToken"
      | "startSale"
      | "totalSupply"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "closeSale",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sale",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFanficToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "startSale",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "closeSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFanficToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CloseSale(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Purchase(uint256,uint256,uint256,address)": EventFragment;
    "Send(address,address,uint256,uint256,uint256)": EventFragment;
    "StartSale(uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CloseSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Purchase"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Send"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartSale"): EventFragment;
}

export interface CloseSaleEventObject {
  saleId: BigNumber;
  tokenId: BigNumber;
}
export type CloseSaleEvent = TypedEvent<
  [BigNumber, BigNumber],
  CloseSaleEventObject
>;

export type CloseSaleEventFilter = TypedEventFilter<CloseSaleEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PurchaseEventObject {
  saleId: BigNumber;
  tokenId: BigNumber;
  price: BigNumber;
  buyer: string;
}
export type PurchaseEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  PurchaseEventObject
>;

export type PurchaseEventFilter = TypedEventFilter<PurchaseEvent>;

export interface SendEventObject {
  from: string;
  to: string;
  saleId: BigNumber;
  tokenId: BigNumber;
  value: BigNumber;
}
export type SendEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  SendEventObject
>;

export type SendEventFilter = TypedEventFilter<SendEvent>;

export interface StartSaleEventObject {
  saleId: BigNumber;
  tokenId: BigNumber;
  price: BigNumber;
  seller: string;
}
export type StartSaleEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  StartSaleEventObject
>;

export type StartSaleEventFilter = TypedEventFilter<StartSaleEvent>;

export interface Market extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketInterface;

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
    closeSale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    purchase(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IMarket.SaleStructOutput]>;

    setFanficToken(
      fanficToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startSale(
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  closeSale(
    saleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  purchase(
    saleId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sale(
    saleId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IMarket.SaleStructOutput>;

  setFanficToken(
    fanficToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startSale(
    tokenId: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    closeSale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    purchase(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IMarket.SaleStructOutput>;

    setFanficToken(
      fanficToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    startSale(
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CloseSale(uint256,uint256)"(
      saleId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): CloseSaleEventFilter;
    CloseSale(
      saleId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): CloseSaleEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Purchase(uint256,uint256,uint256,address)"(
      saleId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null,
      buyer?: null
    ): PurchaseEventFilter;
    Purchase(
      saleId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null,
      buyer?: null
    ): PurchaseEventFilter;

    "Send(address,address,uint256,uint256,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      saleId?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      value?: null
    ): SendEventFilter;
    Send(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      saleId?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      value?: null
    ): SendEventFilter;

    "StartSale(uint256,uint256,uint256,address)"(
      saleId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null,
      seller?: null
    ): StartSaleEventFilter;
    StartSale(
      saleId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null,
      seller?: null
    ): StartSaleEventFilter;
  };

  estimateGas: {
    closeSale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    purchase(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFanficToken(
      fanficToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startSale(
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    closeSale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchase(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sale(
      saleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFanficToken(
      fanficToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startSale(
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
