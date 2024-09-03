require('dotenv').config();
const express = require("express");
const dbConnection = require("./dbConnection");
const path = require("path"); 
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1", require("./router/routes"));

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(3001, () => {
  dbConnection();
  console.log("My app is listening");
});
