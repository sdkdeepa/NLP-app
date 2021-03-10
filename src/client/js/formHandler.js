const handleSubmit = async (event) => {
  event.preventDefault();

  // Get the URL and check if it is valid
  const urlToAnalyzeInput = document.getElementById("urlToAnalyze");
  const isFormValid = Client.validateUserInput(urlToAnalyzeInput.value);

  if (!isFormValid) {
    urlToAnalyzeInput.classList.add("error");
    return;
  }
  urlToAnalyzeInput.classList.remove("error");

  // Get the results section ready to insert the data into
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = `<p>Loading...</p>`;

  // Build the request body to send
  const requestBody = {
    BASE_URL: "https://api.meaningcloud.com/sentiment-2.1?key=",
    LANG: "en",
    urlToAnalyzeInput: urlToAnalyzeInput.value,
  };

  // Call the API
  try {
    const response = await fetch("/analyze-sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const sentimentAnalysisData = await response.json();
    const dataAsString = JSON.stringify(sentimentAnalysisData, null, 4);
    resultsSection.innerHTML = `<pre>${dataAsString}</pre>`;
  } catch (error) {
    console.error(error);
  }
};
export { handleSubmit };