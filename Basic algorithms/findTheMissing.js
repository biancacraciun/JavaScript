// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter 
// in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. 
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

function findMissingLetter(array) {

    let string = array.join("");
    
    for(i = 0; i < string.length; i++) {
        if(string.charCodeAt(i + 1) - string.charCodeAt(i) !== 1) {
          return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
}