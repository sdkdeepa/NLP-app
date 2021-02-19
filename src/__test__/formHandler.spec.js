// const postData = require("..src/client/js/formHandler.js")
// Reference: https://jestjs.io/docs/en/using-matchers , https://generouspiratequeen.tumblr.com/post/634113097308700672/tdd-automated-testing-in-javascript-using-jest

// Import the js file to test
import {postData} from "..src/client/js/formHandler"

describe("Test for the function ", () => {
    test('Test if the postData function is diefined', () => {
        expect(postData).toBeDefined;
    })
})