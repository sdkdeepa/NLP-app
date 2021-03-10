// Refernce: https://stackoverflow.com/questions/1303872/trying-to-validate-url-using-javascript

const validateUserInput = (inputText) => {
  if (!inputText) {
    return false;
  } else {
    return true;
  }
};

export { validateUserInput };
