var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

// configure webpack-bundle-analyzer
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/* Global Variables */
const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

const app = express()
app.use(express.static('dist'))

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST call
app.post('/add', async function(req, res) {
    textInput = req.body.name;
    console.log(`You entered: ${textInput}`);
    const response = await fetch(baseUrl + `${API_KEY}&of=json&lang=en&url=${textInput}`)
    const data = await response.json()
    console.log(data)
    res.send(data)
});


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
 console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
