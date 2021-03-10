const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const axios = require("axios");

<<<<<<< HEAD
const app = express();
const port = 8081;
const API_KEY = process.env.API_KEY;

app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`NLP app listening on port ${port}`);
  if (process.env.API_KEY) {
    console.log(`Your API key is ${process.env.API_KEY}`);
  } else {
    console.error("Please include a valid API key");
  }
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/analyze-sentiment", async (req, res) => {
  const response = await axios.get(
    `${req.body.BASE_URL}${API_KEY}&lang=${req.body.LANG}&url=${req.body.urlToAnalyzeInput}`
  );
  res.send(response.data);
});