# 🦄 Uniswap V2 Pool Event Listening

Uniswap V2 is a decentralized exchange protocol that allows users to trade tokens without the need for a trusted intermediary. By listening to pool events in Uniswap V2, developers can gain insights into key actions such as swaps, liquidity provision, and token burns/mints, helping them create applications with real-time data updates.

### 📦 Overview
This repository provides examples of how to listen for various events in a Uniswap V2 pool using **ethers v5.7.2** and **ethers v6.0.0**.  
It works across most EVM-compatible chains, but if you experience any issues, feel free to reach out for assistance.

### ✅ Requirements
1. Rename `.env.example` to `.env` and provide the following environment variables:
   - `WSS_PROVIDER_URL`: WebSocket URL for your provider (e.g., Infura, Alchemy).
   - `POOL_ADDRESS`: The address of the Uniswap V2 pool.
   - `EVENT_NAME`: The event you want to listen to (see below for event names).

2. Install project dependencies by running the following command:
   ```bash
   npm install
   ```

--- 

### 📜 Pool Events in Uniswap V2

Uniswap V2 pool events allow you to listen to key actions within a liquidity pool. These events can provide valuable insights for tracking liquidity, swaps, and reserves.

| Event Name    | Returns                                            |
|---------------|----------------------------------------------------|
| **Swap**      | `(sender, amount0In, amount1In, amount0Out, amount1Out, to)` |
| **Sync**      | `(reserve0, reserve1)` |
| **Mint**      | `(sender, amount0, amount1)` |
| **Burn**      | `(sender, amount0, amount1, to)` |

- **Swap**: Triggered whenever a swap happens, indicating which tokens were swapped and in what quantity.
- **Sync**: Triggered when the reserves of the pool are updated.
- **Mint**: Fired when liquidity is added to the pool.
- **Burn**: Fired when liquidity is removed from the pool.

---

### 🔊 Pool Listening Functions

#### *ethers v5*
In **ethers v5**, the following methods are used to listen for events emitted by the pool:

- **`pool.on(eventName, listener)`**: Listen for an event continuously, reacting to every occurrence of the event.
- **`pool.once(eventName, listener)`**: Listen for an event once, then stop listening after the first occurrence.
- **`pool.off(eventName, listener)`**: Remove a specific listener for an event, stopping it from receiving future events.
- **`pool.removeListener(eventName, listener)`**: Alias for `off`, removing a specific listener.
- **`pool.removeAllListeners(eventName)`**: Remove all listeners for a specific event.

#### *ethers v6*
In **ethers v6**, the API is slightly adjusted, but the functionality remains similar:

- **`pool.addListener(eventName, listener)`**: Listen for an event continuously (alias for `on`).
- **`pool.on(eventName, listener)`**: Same as `addListener`, listens continuously.
- **`pool.once(eventName, listener)`**: Listen for an event once, then stop.
- **`pool.off(eventName, listener)`**: Remove a specific listener from an event.
- **`pool.removeListener(eventName, listener)`**: Alias for `off`, removes a specific listener.
- **`pool.removeAllListeners(eventName)`**: Remove all listeners for a specific event.

---

### 📊 Pool Listener Info

The following methods allow you to query listener information:

| Method                            | Description                                          |
|------------------------------------|------------------------------------------------------|
| **`pool.listeners(eventName)`**  | Returns an array of listeners registered for the event. |
| **`pool.listenerCount(eventName)`** | Returns the number of listeners registered for the event. |

---

### 🗂️ Query Historical Pool Event Data

To query past events in the pool's history, use the following methods.

#### *ethers v5*
- **`pool.queryFilter(eventName, fromBlock, toBlock)`**:
  - Fetches historical event data for a specific event.
  - **Parameters**:
    - `eventName`: The event you want to query (optional).
    - `fromBlock` (default: `0`): The starting block number for the query.
    - `toBlock` (default: `"latest"`): The ending block number for the query.

#### *ethers v6*
- **`pool.queryFilter(eventName, fromBlock, toBlock)`**: Same as v5, used to fetch historical events.
- **`pool.getEvent(eventName)`**:
  - Returns the event object for a given name.
  - **Use Case**: Helpful when event names conflict with JavaScript reserved words or for programmatically accessing contract events.

---
