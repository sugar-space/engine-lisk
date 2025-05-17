# Sugar Engine – Lisk Backend

Backend service powering Sugar's interaction with the Lisk blockchain. Built to enable seamless message validation, real-time communication, and on-chain logic handling for the Sugar Web3 streaming platform.

## 🔧 Tech Stack

* **Express.js** – HTTP & WebSocket API
* **Viem** – Blockchain interaction (Lisk)
* **MongoDB** – Database for persistence
* **RabbitMQ** – Queueing & task distribution
* **WebSocket** – Real-time communication

## 📦 Package & Scripts

`package.json` highlights:

```json
"scripts": {
  "dev": "tsup --watch",
  "build": "tsup",
  "start": "node ./dist"
}
```

* Built with TypeScript and bundled via `tsup`
* Uses `express-async-errors` for clean async error handling
* Real-time via `express-ws` and `ws`

## 📁 Project Structure

```text
.
├── src/
│   ├── routes/
│   ├── services/
│   ├── packages/
│   └── index.ts
├── .env
└── dist/
```

## 🌐 Repo

> GitHub: [sugar-space/engine-lisk](https://github.com/sugar-space/engine-lisk)
