// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let lower = word.toLowerCase();
    let wordArr = lower.split("");
    let final = [];
    
    for(i = 0; i < wordArr.length; i++) {
      if(wordArr.indexOf(wordArr[i]) === wordArr.lastIndexOf(wordArr[i])) {
        final.push("(");
      } else {
        final.push(")");
      }
    }
    
    return final.join("");
}

duplicateEncode("din"); // "((("
duplicateEncode("recede"); // "()()()"
duplicateEncode("Success"); // ")())())"
duplicateEncode("(( @"); // "))(("