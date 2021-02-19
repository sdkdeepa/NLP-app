// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

describe("Test for invalid URL", () => {
    test('Form is not submitted when the URL is invalid', () => {
        expect(handleSubmit("Invalid URL, Please enter a valid one")).toBe(false);
    })
})