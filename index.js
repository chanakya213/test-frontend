const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
const sales = require("./sales");
const connectDb = require("./connect");
connectDb();
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("yes this route is working fine ... . ..");
});

app.use("/sales", sales);

app.listen("3200", () => {
  console.log("server running at port 3200");
});
