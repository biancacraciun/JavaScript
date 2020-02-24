const firstNonRepeatingLetter(s) {

    if (typeof s !== "string") {
        return "Try w/ a string value!";
    };

    let result = "";

    for (i=0; i<s.length; i++) {
        if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
            result += s.charAt(i);
            break;
        }
    }
    
    return result;
}

firstNonRepeatingLetter('a');
firstNonRepeatingLetter('stress');
firstNonRepeatingLetter('moonmen');

function firstNonRepeatingLetter(s) {

    for(var i in s) {
    
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    
    return '';
}