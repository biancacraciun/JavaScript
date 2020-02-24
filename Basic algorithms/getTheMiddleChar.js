// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    let arr = [];
    let char = s.length/2;
    
    if(s.length % 2 !== 0){ 
      arr.push(s.charAt(char));
    } else {
      arr.push(s.charAt(char - 1) + s.charAt(char))
    }

    return arr.join("");
}

getMiddle("test"); // "es"
getMiddle("study"); // "u"
