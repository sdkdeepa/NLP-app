const { checkForUrl } = require('./validUrl');

function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if (checkForUrl(formText)) {
        postData(formText)
            .then(function (res) {
                console.log('Posting the data obtained from the server to the client', res);
                document.getElementById('polarity').innerHTML = `Polarity:${res.score_tag}`;
                document.getElementById('agreement').innerHTML = `Irony:${res.agreement}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity:${res.subjectivity}`;
                document.getElementById('confidence').innerHTML = `Confidence:${res.confidence}`;
                document.getElementById('irony').innerHTML = `Irony:${res.irony}`;
            })
    } else {
        alert = "Please enter valid URL";
    }
}
//Post data 
const postData = async (url = "") => {
    //fetching the data from /add endpoint
    const response = await fetch('http://localhost:3000/add', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }),
    });
    // adding try catch for errors if any
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }