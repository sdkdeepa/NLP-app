// Refernce: https://stackoverflow.com/questions/1303872/trying-to-validate-url-using-javascript

function checkForUrl(returnedUrl) {
   let RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const url = returnedUrl;

    if(RegExp.test(url)){
        return true;
    }else{
        return false;
    }
} 

export { checkForUrl }
