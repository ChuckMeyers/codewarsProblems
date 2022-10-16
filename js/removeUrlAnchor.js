// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    let urlCheck = url.indexOf('#');
    let substr = url.substring(0, urlCheck)
    if(urlCheck !== -1) {
       return substr;
    } else {
     return url;
    }
   }