var path = require('path')
const fetch = require('node-fetch')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config();

// tried to configure webpack-bundle-analyzer and added screenshot in Readme.md
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const app = express()
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
//Client.checkForUrl(formText)
app.use(express.static('dist'))
console.log(__dirname)

/* Global Variables  as suggested in the rubric */
const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
const API_KEY = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`)


app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

//  Fetch URL with the meaning cloud base url along with API _KEY and user input url
app.post('/add', async (req, res) => {
  urlEntry = req.body.url;
  const response = await fetch(`${apiBaseUrl}${API_KEY}&of=json&model=general&lang=en&url=${req.body.url}`);
  console.log('server response: ', response);

  const data = await response.json();
  console.log('Getting data from the server: ', data);
  // storing the metadata received inside a variable
  const returnData = {
    score_tag: data.score_tag,
    agreement: data.agreement,
    subjectivity: data.subjectivity,
    confidence: data.confidence,
    irony: data.irony
  };
  console.log(returnData);
  res.send(returnData);

});

// App is listening in port 3000
app.listen(3000, function () {
  console.log('MeaningCloud App is running on 3000!')
})