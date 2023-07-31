require("dotenv").config();
const express = require("express");
const connectDB = require("./Config/db");
connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("", require("./Controller/mainController.js"));

app.listen(port, () => {
  console.log(`server is listing on host http://localhost:${port}`);
});
