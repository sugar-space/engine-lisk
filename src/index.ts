import { mongoConnect } from "./packages/mongodb";
import { connectAmq } from "./packages/rabbitmq";
import { runServer } from "./server";

mongoConnect()
  .then(() => {
    connectAmq().then(() => {
      runServer();
    });
  })
  .catch(console.error);

// startWatcherEvents();
process.on("SIGINT", () => {
  process.exit(1);
});

process.on("uncaughtException", (err, origin) => {
  console.error("uncaughtException", err);
  process.exit(1);
  // process.kill(process.pid);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("unhandledRejection", reason);
  process.exit(1);
  // process.kill(process.pid);
});
