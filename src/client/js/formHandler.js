const { checkForUrl } = require('./validUrl');

const API_KEY = process.env.API_KEY;

function handleSubmit(event) { 
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForUrl(formText)){
        postResults('http://localhost:3000/add', {url: formText})
            .then(function(res){
                document.getElementById('polarity').innerHTML = `Polarity: ${res.score_tag}`;
                document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
                document.getElementById('irony').innerHTML = `Irony:${res.irony}`;
            })
    }else {
        alert("Enter valid url")
    }
    }

const postResults = async (url = "", data = {}) => {
    console.log("Post method is invoked", data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data})
    });
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };

export { handleSubmit }