require("dotenv").config();

const WSS_PROVIDER_URL = process.env.WSS_PROVIDER_URL;
const eventName = process.env.EVENT_NAME;
const uniswapV2PoolAddress = process.env.POOL_ADDRESS;

const ethersV5 = require("ethers5");
const ethersV6 = require("ethers6");

const UniswapV2PairABI = require("@uniswap/v2-core/build/IUniswapV2Pair.json").abi;

const providerV5 = new ethersV5.providers.WebSocketProvider(WSS_PROVIDER_URL);
const providerV6 = new ethersV6.WebSocketProvider(WSS_PROVIDER_URL);

const uniswapV2PoolContractV5 = new ethersV5.Contract(uniswapV2PoolAddress, UniswapV2PairABI, providerV5);
const uniswapV2PoolContractV6 = new ethersV6.Contract(uniswapV2PoolAddress, UniswapV2PairABI, providerV6);

module.exports = {
	WSS_PROVIDER_URL,
	ethersV5,
	ethersV6,
	eventName,
	UniswapV2PairABI,
	providerV5,
	providerV6,
	uniswapV2PoolContractV5,
	uniswapV2PoolContractV6,
};
