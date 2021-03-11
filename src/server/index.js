const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const axios = require("axios");

const API_KEY = process.env.API_KEY;
const port = process.env.PORT || 8081;

const app = express();
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

app.get("/", function (req, res) {

  res.sendFile("dist/index.html", { root: __dirname });
});

app.post("/analyze-sentiment", async (req, res) => {
  const response = await axios.get(
    `${req.body.BASE_URL}${API_KEY}&lang=${req.body.LANG}&url=${req.body.urlToAnalyzeInput}`
  );
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`NLP app listening on port ${port}`);
  if (process.env.API_KEY) {
    console.log(`Your API key is ${process.env.API_KEY}`);
  } else {
    console.error("Please include a valid API key");
  }
});