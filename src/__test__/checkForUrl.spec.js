// Reference: https://jestjs.io/docs/en/using-matchers , https://generouspiratequeen.tumblr.com/post/634113097308700672/tdd-automated-testing-in-javascript-using-jest

import { checkForUrl } from "..src/client/js/checkForUrl"

describe("Test for Valid URL", () => {
    test('Form is submitted when the URL is valid', () => {
        expect(checkForUrl("https://dev.to/carloswhite/how-to-reliably-install-node-js-using-nvm-on-macos-12j0")).tobe(true);
    })
})

// const checkForUrl = require("..src/client/js/validUrl.js")