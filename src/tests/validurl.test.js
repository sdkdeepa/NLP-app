import{checkForUrl} from "..src/client/js/validUrl.js"

describe("Test for Valid URL", () => {
test('Form is submitted when the URL is valid', () => {
    expect(checkForUrl("https://api.meaningcloud.com/sentiment-2.1?key=")).toBe(true);
})
})

describe("Test for invalid URL", () => {
test('Form is not submitted when the URL is invalid', () => {
    expect(checkForUrl("Invalid URL, Please enter a valid one")).toBe(false);
})
})

