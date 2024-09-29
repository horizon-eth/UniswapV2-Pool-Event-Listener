export function selectEventListenerFunction(_eventName, _executorFunction) {
	const eventListenerFunctions = {
		Swap: (sender, amount0In, amount1In, amount0Out, amount1Out, to) => {
			_executorFunction({
				sender: sender,
				amount0In: amount0In,
				amount1In: amount1In,
				amount0Out: amount0Out,
				amount1Out: amount1Out,
				to: to,
			});
		},
		Sync: (reserve0, reserve1) => {
			_executorFunction({
				reserve0: reserve0,
				reserve1: reserve1,
			});
		},
		Mint: (sender, amount0, amount1) => {
			_executorFunction({
				sender: sender,
				amount0: amount0,
				amount1: amount1,
			});
		},
		Burn: (sender, amount0, amount1, to) => {
			_executorFunction({
				sender: sender,
				amount0: amount0,
				amount1: amount1,
				to: to,
			});
		},
	};

	if (!_eventName in eventListenerFunctions) throw new Error(`Couldn't find eventListenerFunction for ${_eventName}`);

	return eventListenerFunctions[_eventName];
}
