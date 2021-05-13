const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const personnagesRoutes = require("./routes/Personnages");
app.use(personnagesRoutes);

const comicsRoutes = require("./routes/Comics");
app.use(comicsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
