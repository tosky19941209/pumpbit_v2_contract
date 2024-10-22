/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface RewardCollectorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "EFC"
      | "collectContractsV1ArchitectRewardBatch"
      | "collectContractsV1FarmLiquidityRewardBatch"
      | "collectContractsV1FarmReferralRewardBatch"
      | "collectContractsV1FarmRewardBatch"
      | "collectContractsV1FarmRiskBufferFundRewardBatch"
      | "collectContractsV1ReferralFeeBatch"
      | "collectContractsV1StakingRewardBatch"
      | "collectContractsV1V3PosStakingRewardBatch"
      | "collectFarmRewardBatch"
      | "collectReferralFeeBatch"
      | "distributor"
      | "distributorV2"
      | "multicall"
      | "router"
      | "routerV1"
      | "sweepToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "EFC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1ArchitectRewardBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1FarmLiquidityRewardBatch",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1FarmReferralRewardBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1FarmRewardBatch",
    values: [BigNumberish, BigNumberish[], BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1FarmRiskBufferFundRewardBatch",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1ReferralFeeBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1StakingRewardBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectContractsV1V3PosStakingRewardBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectFarmRewardBatch",
    values: [BigNumberish, BigNumberish[], BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectReferralFeeBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributorV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(functionFragment: "routerV1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "EFC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1ArchitectRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1FarmLiquidityRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1FarmReferralRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1FarmRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1FarmRiskBufferFundRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1ReferralFeeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1StakingRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectContractsV1V3PosStakingRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectFarmRewardBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectReferralFeeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributorV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "routerV1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
}

export interface RewardCollector extends BaseContract {
  connect(runner?: ContractRunner | null): RewardCollector;
  waitForDeployment(): Promise<this>;

  interface: RewardCollectorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  EFC: TypedContractMethod<[], [string], "view">;

  collectContractsV1ArchitectRewardBatch: TypedContractMethod<
    [_tokenIDs: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  collectContractsV1FarmLiquidityRewardBatch: TypedContractMethod<
    [_pools: AddressLike[]],
    [bigint],
    "nonpayable"
  >;

  collectContractsV1FarmReferralRewardBatch: TypedContractMethod<
    [_pools: AddressLike[], _referralTokens: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  collectContractsV1FarmRewardBatch: TypedContractMethod<
    [
      _nonceAndLockupPeriod: BigNumberish,
      _packedPoolRewardValues: BigNumberish[],
      _signature: BytesLike,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  collectContractsV1FarmRiskBufferFundRewardBatch: TypedContractMethod<
    [_pools: AddressLike[]],
    [bigint],
    "nonpayable"
  >;

  collectContractsV1ReferralFeeBatch: TypedContractMethod<
    [_pools: AddressLike[], _referralTokens: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  collectContractsV1StakingRewardBatch: TypedContractMethod<
    [_ids: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  collectContractsV1V3PosStakingRewardBatch: TypedContractMethod<
    [_ids: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  collectFarmRewardBatch: TypedContractMethod<
    [
      _nonceAndLockupPeriod: BigNumberish,
      _packedMarketRewardValues: BigNumberish[],
      _signature: BytesLike,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  collectReferralFeeBatch: TypedContractMethod<
    [_markets: AddressLike[], _referralTokens: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  distributor: TypedContractMethod<[], [string], "view">;

  distributorV2: TypedContractMethod<[], [string], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  router: TypedContractMethod<[], [string], "view">;

  routerV1: TypedContractMethod<[], [string], "view">;

  sweepToken: TypedContractMethod<
    [_token: AddressLike, _amountMinimum: BigNumberish, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "EFC"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "collectContractsV1ArchitectRewardBatch"
  ): TypedContractMethod<[_tokenIDs: BigNumberish[]], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "collectContractsV1FarmLiquidityRewardBatch"
  ): TypedContractMethod<[_pools: AddressLike[]], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "collectContractsV1FarmReferralRewardBatch"
  ): TypedContractMethod<
    [_pools: AddressLike[], _referralTokens: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collectContractsV1FarmRewardBatch"
  ): TypedContractMethod<
    [
      _nonceAndLockupPeriod: BigNumberish,
      _packedPoolRewardValues: BigNumberish[],
      _signature: BytesLike,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collectContractsV1FarmRiskBufferFundRewardBatch"
  ): TypedContractMethod<[_pools: AddressLike[]], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "collectContractsV1ReferralFeeBatch"
  ): TypedContractMethod<
    [_pools: AddressLike[], _referralTokens: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collectContractsV1StakingRewardBatch"
  ): TypedContractMethod<[_ids: BigNumberish[]], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "collectContractsV1V3PosStakingRewardBatch"
  ): TypedContractMethod<[_ids: BigNumberish[]], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "collectFarmRewardBatch"
  ): TypedContractMethod<
    [
      _nonceAndLockupPeriod: BigNumberish,
      _packedMarketRewardValues: BigNumberish[],
      _signature: BytesLike,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collectReferralFeeBatch"
  ): TypedContractMethod<
    [_markets: AddressLike[], _referralTokens: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "distributorV2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "routerV1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sweepToken"
  ): TypedContractMethod<
    [_token: AddressLike, _amountMinimum: BigNumberish, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  filters: {};
}
