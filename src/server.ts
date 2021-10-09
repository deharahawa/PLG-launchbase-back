import { app } from "./app";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.listen(process.env.PORT || 3333);
