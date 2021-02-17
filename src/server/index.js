var path = require('path')
const fetch = require('node-fetch')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config();

// configure webpack-bundle-analyzer
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const app = express()
app.use(express.static('dist'))
console.log(__dirname)
app.use(cors())
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }));

//Client.checkForUrl(formText)

/* Global Variables */
const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
const apiKey= process.env.API_KEY
// console.log(`Your API Key is ${process.env.API_KEY}`)

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})


// POST call
app.post("/add", async function (req, res) {
  const text = req.body.url;
  console.log(`Entered url: ${text}`);
  const response = await fetch(apiBaseUrl+`${apiKey}&txt=${text}&lang=en`)
  res.send(response)
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
  console.log('MeaningCloud App is running on 3000!')
})
