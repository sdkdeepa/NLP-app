import { checkForUrl } from "..src/client/js/validUrl.js"

describe("Test for Valid URL", () => {
    test('Form is submitted when the URL is valid', () => {
        expect(checkForUrl("https://api.meaningcloud.com/sentiment-2.1?key=")).toBe(true);
    })
})