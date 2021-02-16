const { checkForUrl } = require('./validUrl');

const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

const postResults = async (url = "", data = {}) => {
    console.log("Post method is invoked", data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( { 'url':url})
    });
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };

function handleSubmit(event) { 
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (checkForUrl(formText)){
        postResults(formText)
            .then(res => {
                document.getElementById('polarity').innerHTML = `Polarity: $(res.score_tag}`;
                document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
                document.getElementById('irony').innerHTML = `Irony:${res.irony}`;
            })
    }else {
        alert("Enter valid url")
        }
    }
    

export { handleSubmit }