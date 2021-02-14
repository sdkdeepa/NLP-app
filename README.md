# Project Instructions

The starter code for the project is present [here](https://github.com/udacity/fend/tree/refresh-2019). Clone the specific branch 'refresh-2019' or download the ZIP file, although feel free to start from scratch! It is the same as the starter code we began with in Lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

We have divided the instructions into the following stages, as explained below:

# Project details

# Stage 1 - Getting Started - Setting up the Project

It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally. Remember that once you clone, you will still need to install everything:

`cd <project directory>`
`npm install`

Follow the steps from the course up to Lesson 4, but do not add Service Workers just yet. We won't need the service workers during development, and having extra caches floating around just means there's more potential for confusion. Just for your quick reference, we installed the following loaders and plugins so far:
```javascript
// Choose the necessary installation for your development mode
`npm i -D @babel/core @babel/preset-env babel-loader`
`npm i -D style-loader node-sass css-loader sass-loader`
`npm i -D clean-webpack-plugin`
`npm i -D html-webpack-plugin`
`npm i -D mini-css-extract-plugin`
`npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`
```
# Stage 2 - Setting up the API

The Meaningcloud API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

If you started this project after July 7, 2020, you will be using the MeaningCloud Sentiment Analysis API for this project.

The project rubric item for "API" criteria says:

The app should make a successful call to the API on form submission. If this is successful, the API keys and response handling were done correctly. 
You can check that the API keys are found in server.js or a similar node file. It is not acceptable for an API key to be set in a client-facing file (like index.js)

Information from the API response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc.

### Step 1: Signup for an API key
First, you will need to [go here](https://www.meaningcloud.com/developer/login). Signing up will get you an subscription key. 
For this project, you can find the [API](https://www.meaningcloud.com/developer/sentiment-analysis). 

### Step 2: Environment Variables

Next, in `server/index.js`, you need to declare your API credentials, which will look something like this:
```javascript 
// You could call it meaningCloudapi, or anything else
var textapi = new meaningCloud({
  application_key: "your-key"
});
```
If you are using the MeaningCloud API, you need to use `application_key`
...But there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly, are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold value. The environment variables only belong to your local system and won't be visible when you push your code to a different environment like Github. Follow the steps below to configure environment variables:

1. Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file

2. Create a new `.env` file in the root of your project.

3. Fill the .env file with your API keys like this:
```javascript
API_ID=**************************
API_KEY=**************************
```
4. Add this code to the very top of your server/index.js file:
```javascript
const dotenv = require('dotenv');
dotenv.config();
```
5. If you want to refer the environment variables, try putting a prefix process.env. in front of the variable name in the server/index.js file, an example might look like this:
console.log(`Your API key is ${process.env.API_KEY}`);

6. The step above is just to help you understand how to refer to an environment variable from your code. In server/index.js, your updated API credential settings should look like this:
``` javascript
// You could call it meaningCloudapi, or anything else
var textapi = new meaningCloud({
   application_key: process.env.API_KEY
});
```
Go to your `.gitignore` file, in the project root, and add .env. It will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys would become pointless.

### Step 3: Using the API
We're ready to go! You can also check out the documentation of the [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis). MeaningCloud also has several other APIs, which we won’t be using for this project, but feel free to take a look around if you’re curious!

# Stage 3 - Project Enhancement
At the current stage, make enhancement in your project code to ensure most of the requirements as mentioned in the project rubric are met. In addition, parse the response body to dynamically fill content on the page.
Only the rubric requirements related to "Offline Functionality" and "Testing" criteria should remain for the next stages.


# Stage 4 - Unit Testing using Jest Framework
You must have read the rubric item for "Testing" criteria, that says:
_Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/client/js file should have at least one test._

[Jest](https://jestjs.io/en/) is a framework for testing JavaScript projects. We are interested in the unit-testing of our project. The Jest framework provides us the ability to create, and run unit tests. In general, unit testing means to test the functionality of each unit/component of a project. But, in our case, we will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input. Let's learn to add Jest to your project to handle unit-testing.

How does it work?
1. Install Jest by using `npm install --save-dev jest`

2. Write the custom JS in your src/client/js directory, responsible for the server, and form submission task. For example, assume that the /src/client/js/formHandler.js file has the following function to be tested:
```javascript
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
}
export { handleSubmit }
```

3. You have to ensure that all your custom functions in src/client/js directory can handle error responses if the user input does not match API requirements. You will write tests in `<function_name>.test.js` or `<function_name>.spec.js` file, to be present in a __test__ folder. For each functionality, consider writing a separate test file. The __test__ folder should be present in the project directory.
In each test file, the general flow of the test block should be:
- Import the js file to test
- Define the input for the function. Note that, to keep it simple, we will not validate the input being provided to the test cases.
- Define the expected output
- Check if the function produces the expected output

For the example function shown above, /src/client/js/formHandler/handleSubmit(), you can write a test file testFormHandler.spec.js in the __test__ directory, having a test block as:
``` javascript
// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(handleSubmit).toBeDefined();
})});
```
You must be wondering about the matchers, and other syntactical information about test blocks. At this point, you must refer to the external resources:
- Jest - Getting started [here](https://jestjs.io/docs/en/getting-started) - Provides a basic overview, with the help of an example.
- Jest - matchers [here](https://jestjs.io/docs/en/using-matchers) - Read carefully to identify the suitable matcher for each of your functions.
- Jest - testing asynchronous code [here](https://jestjs.io/docs/en/asynchronous) - If you have code that runs asynchronously.
- A tutorial for beginners [here](https://www.valentinog.com/blog/jest/) - A good explanatory tutorial.
4. Configure an npm script named "test" in package.json to run your tests from the command line:
``` javascript
"scripts": {
    "test": "jest"
}
```
Also, ensure that the "devDependencies" in package.json have a suitable entry for Jest and others, such as, "jest": "^25.3.0",, where the version may vary with time.
5. Run the `npm run test` command.


# Stage 5 - Service Workers

The rubric item for "Offline Functionality" criteria says:
_The project must have set up service workers in webpack._
Go to the webpack config file, and add the setup for service workers. Test that the site should be available even when you stop your local server.

# Stage 6 - Deployment

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
