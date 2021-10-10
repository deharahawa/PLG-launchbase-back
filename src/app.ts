import express from "express";
import cors from "cors";
import { router } from "./routes";
import path from "path";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use(express.json());
app.use(router);
app.use(cors(corsOptions));

export { app };
