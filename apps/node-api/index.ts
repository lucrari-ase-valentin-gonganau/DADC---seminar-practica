import express from "express";
import { router as routerSnmp } from "./snmp.ts";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());

app.use(cors());
// add cors

app.get("/", (req, res) => {
  res.send("Hello from Node.js API!");
});

app.use("/snmp", routerSnmp);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("An error occurred:", err);
});
