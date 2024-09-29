import dotenv from "dotenv";
dotenv.config();

const WSS_PROVIDER_URL = process.env.WSS_PROVIDER_URL;
const uniswapV2PoolAddress = process.env.POOL_ADDRESS;
export const eventName = process.env.EVENT_NAME;

import { providers, Contract } from "ethers5";
import { WebSocketProvider, Contract as _Contract } from "ethers6";

import UniswapV2PairABI from "@uniswap/v2-core/build/IUniswapV2Pair.json" assert { type: "json" };

const providerV5 = new providers.WebSocketProvider(WSS_PROVIDER_URL);
const providerV6 = new WebSocketProvider(WSS_PROVIDER_URL);

export const uniswapV2PoolContractV5 = new Contract(uniswapV2PoolAddress, UniswapV2PairABI.abi, providerV5);
export const uniswapV2PoolContractV6 = new _Contract(uniswapV2PoolAddress, UniswapV2PairABI.abi, providerV6);
