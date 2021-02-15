const handleSubmit = require("../client/js/formHandler");

test('Form is submitted when the URL is valid', () => {
    expect(handleSubmit("https://api.meaningcloud.com/sentiment-2.1?key=")).toBeTruthy();
});

test('Form is not submitted when the URL is invalid', () => {
    expect(handleSubmit("Invalid URL")).toBeFalsy();
});