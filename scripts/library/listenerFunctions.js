function selectListenerFunction(_eventName) {
	let eventListenerFunction;

	if (_eventName == "Sync") {
		// @reserve0 => token0 reserve in the pool
		// @reserve1 => token1 reserve in the pool
		eventListenerFunction = (reserve0, reserve1) => {
			console.log(`reserve0: ${reserve0}`);
			console.log(`reserve1: ${reserve1}`);
		};
	}

	if (_eventName == "Swap") {
		// @sender => sender of the transaction
		// @amount0In => token0 input amount
		// @amount1In => token1 input amount
		// @amount0Out => token0 output amount
		// @amount1Out => token1 output amount
		// @to => where will the tokens be sent
		eventListenerFunction = (sender, amount0In, amount1In, amount0Out, amount1Out, to) => {
			console.log(`sender: ${sender}`);
			console.log(`amount0In: ${amount0In}`);
			console.log(`amount1In: ${amount1In}`);
			console.log(`amount0Out: ${amount0Out}`);
			console.log(`amount1Out: ${amount1Out}`);
			console.log(`to: ${to}`);
		};
	}

	if (_eventName == "Mint") {
		// @sender => address that initiated the minting of liquidity
		// @amount0 => amount of token0 added to the liquidity pool
		// @amount1 => amount of token1 added to the liquidity pool
		eventListenerFunction = (sender, amount0, amount1) => {
			console.log(`sender: ${sender}`);
			console.log(`amount0: ${amount0}`);
			console.log(`amount1: ${amount1}`);
		};
	}

	if (_eventName == "Burn") {
		// @sender => address that initiated the burning of liquidity
		// @amount0 => amount of token0 removed from the liquidity pool
		// @amount1 => amount of token1 removed from the liquidity pool
		// @to => address that will receive the removed tokens.
		eventListenerFunction = (sender, amount0, amount1, to) => {
			console.log(`sender: ${sender}`);
			console.log(`amount0: ${amount0}`);
			console.log(`amount1: ${amount1}`);
			console.log(`to: ${to}`);
		};
	}

	if (eventListenerFunction == undefined) throw new Error(`Couldn't find eventListenerFunction for ${_eventName}`);

	return eventListenerFunction;
}

module.exports = {
	selectListenerFunction,
};
