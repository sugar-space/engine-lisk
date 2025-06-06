import "express-async-errors";

import express from "express";
import cors from "cors";
import CONFIG from "./config";
import { GlobalRouter } from "./routes";
import expressWs from "express-ws";
import { alertsHandler, mediashareHandler } from "./services/websocket";

const app = express();
const wsInstance = expressWs(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    limit: "100mb",
  })
);

/* ------------------------------ custom routes ----------------------------- */

wsInstance.app.ws("/alerts", (ws, req) => {
  alertsHandler(ws, req);
});

wsInstance.app.ws("/mediashare", (ws, req) => {
  mediashareHandler(ws, req);
});

app.use(GlobalRouter);
/* -------------------------- end of custom routes -------------------------- */

app.get("/", (req, res) => {
  console.log(`OK  ${process.env.NODE_IP}:${process.env.PORT}`);
  res.json({
    status: `OK`,
  });
});

app.use("*", (req, res) => {
  res.status(400);
  res.json({
    url: req.url,
    message: "Not Found",
  });
});

export async function runServer() {
  app.listen(CONFIG.PORT, () => {
    console.log(`Listening on port: `, CONFIG.PORT);
  });
  return app;
}

export { app };
