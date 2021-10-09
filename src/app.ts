import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(router);
app.use(cors(corsOptions));

export { app };
