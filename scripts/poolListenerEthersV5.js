const { eventName, uniswapV2PoolContractV5 } = require("../config");
const { selectListenerFunction } = require("./library/listenerFunctions");

const eventListenerFunction = selectListenerFunction(eventName);

// ---------------------- activating pool listening ----------------------
// on() => Listen for eventName continuously
const poolOn = () => uniswapV2PoolContractV5.on(eventName, eventListenerFunction);

// once() => Listen for eventName just for once and stops listening after that
const poolOnce = () => uniswapV2PoolContractV5.once(eventName, eventListenerFunction);

poolOn();
poolOnce();
// ---------------------- activating pool listening ----------------------

// ---------------------- deactivating pool listening ----------------------
// off() => Cancel listening process for eventName
const poolOff = () => uniswapV2PoolContractV5.off(eventName, eventListenerFunction);

// removeListener() => Cancel listening process for a single listener
const poolRemoveListener = () => uniswapV2PoolContractV5.removeListener(eventName, eventListenerFunction);

// removeAllListeners() => Cancel listening process for all listeners
const poolRemoveAllListeners = () => uniswapV2PoolContractV5.removeAllListeners(eventName);

// poolOff();
// poolRemoveListener();
// poolRemoveAllListeners();
// ---------------------- deactivating pool listening ----------------------

// ---------------------- pool listener info ----------------------
// listeners() => Returns listeners which registered for eventName
const poolListeners = () => uniswapV2PoolContractV5.listeners(eventName);

// listenerCount() => Returns listeners' count which registered for eventName
const poolListenerCount = () => uniswapV2PoolContractV5.listenerCount(eventName);

console.log(poolListeners());
console.log(poolListenerCount());
// ---------------------- pool listener info ----------------------

// ---------------------- fetching pool events ----------------------
// queryFilter() => Returns all events that have been occured between fromBlockOrBlockhash to toBlock range
const poolQueryFilter = (fromBlockOrBlockhash, toBlock) => uniswapV2PoolContractV5.queryFilter(eventName, fromBlockOrBlockhash, toBlock);

const fromBlockOrBlockhash = 16349950;
const toBlock = 16349960;

// poolQueryFilter(fromBlockOrBlockhash, toBlock)
// 	.then((poolEvents) => console.log(`poolEvents: ${JSON.stringify(poolEvents, null, 2)}`))
// 	.catch((err) => console.error(err));
// ---------------------- fetching pool events ----------------------
