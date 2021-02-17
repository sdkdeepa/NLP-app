const { checkForUrl } = require('./validUrl');

function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if (checkForUrl(formText)) {

    postData(formText)
    .then(function(res) {
        console.log('client side response', res);
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

const postData = async(url ="") => {
    const response = await fetch('https://www.meaningcloud.com/developer/sentiment-analysis/console/2.1', {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {"url": url }),
        });

        try {
            const newData = await response.text();
            console.log(newData);
            return newData;
        } catch (error) {
            console.log("error", error);
        }
}

export { handleSubmit }