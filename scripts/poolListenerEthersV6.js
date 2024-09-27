const { eventName, uniswapV2PoolContractV6 } = require("../config");
const { selectListenerFunction } = require("./library/listenerFunctions");

const eventListenerFunction = selectListenerFunction(eventName);

// ---------------------- activating pool listening ----------------------
// addListener() => Listen for eventName continuously
const poolAddEventListener = () => uniswapV2PoolContractV6.addListener(eventName, eventListenerFunction);

// on() => Listen for eventName continuously
const poolOn = () => uniswapV2PoolContractV6.on(eventName, eventListenerFunction);

// once() => Listen for eventName just for once and stops listening after that
const poolOnce = () => uniswapV2PoolContractV6.once(eventName, eventListenerFunction);

poolAddEventListener();
poolOn();
poolOnce();
// ---------------------- activating pool listening ----------------------

// ---------------------- deactivating pool listening ----------------------
// off() => Cancel listening process for eventName
const poolOff = () => uniswapV2PoolContractV6.off(eventName, eventListenerFunction);

// removeListener() => Cancel listening process for a single listener
const poolRemoveListener = () => uniswapV2PoolContractV6.removeListener(eventName, eventListenerFunction);

// removeAllListeners() => Cancel listening process for all listeners
const poolRemoveAllListeners = () => uniswapV2PoolContractV6.removeAllListeners(eventName);

// poolOff()
// 	.then(async () => {
// 		console.log(await poolListeners());
// 		console.log(await poolListenerCount());
// 	})
// 	.catch((err) => console.error(err));

// poolRemoveListener()
// 	.then(async () => {
// 		console.log(await poolListeners());
// 		console.log(await poolListenerCount());
// 	})
// 	.catch((err) => console.error(err));

// poolRemoveAllListeners()
// 	.then(async () => {
// 		console.log(await poolListeners());
// 		console.log(await poolListenerCount());
// 	})
// 	.catch((err) => console.error(err));
// ---------------------- deactivating pool listening ----------------------

// ---------------------- pool listener info ----------------------
// listeners() => Returns listeners which registered for eventName
const poolListeners = () => uniswapV2PoolContractV6.listeners(eventName);

// listenerCount() => Returns listeners' count which registered for eventName
const poolListenerCount = () => uniswapV2PoolContractV6.listenerCount(eventName);

poolListeners()
	.then((listeners) => console.log(`listeners: ${listeners}`))
	.catch((err) => console.error(err));

poolListenerCount()
	.then((listenerCount) => console.log(`listenerCount: ${listenerCount}`))
	.catch((err) => console.error(err));
// ---------------------- pool listener info ----------------------

// ---------------------- fetching pool events ----------------------
// queryFilter() => Returns all events that have been occured between fromBlockOrBlockhash to toBlock range
const poolQueryFilter = (fromBlock, toBlock) => uniswapV2PoolContractV6.queryFilter(eventName, fromBlock, toBlock);

const fromBlock = 16349950;
const toBlock = 16349960;

// poolQueryFilter(fromBlock, toBlock)
// 	.then((poolEvents) => console.log(`poolEvents: ${JSON.stringify(poolEvents, null, 2)}`))
// 	.catch((err) => console.error(err));
// ---------------------- fetching pool events ----------------------

// ---------------------- get pool event ----------------------
// getEvent() => Returns the event for a given name. This is useful when a contract event name conflicts with a JavaScript name such as prototype or when using a Contract programatically
const getPoolEvent = () => uniswapV2PoolContractV6.getEvent(eventName);

// console.log(`Event:`, getPoolEvent());
// ---------------------- get pool event ----------------------
