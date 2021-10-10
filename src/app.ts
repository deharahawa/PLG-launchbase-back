import express from "express";
import cors from "cors";
import { router } from "./routes";
import path from "path";
import httpProxy from "http-proxy";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

httpProxy.createProxyServer({
  target: process.env.PROXY_SERVER,
  toProxy: true,
  changeOrigin: true,
  xfwd: true,
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(express.json());
app.use(router);
app.use(cors(corsOptions));

export { app };
