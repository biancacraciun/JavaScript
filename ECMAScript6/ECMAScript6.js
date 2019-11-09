// 2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.

// ES5
function longestString (str) {
    if (typeof str !== "string") {
        return "Introduceti o valoare de tip string!";
    };

    var array = str.split(" ").sort(function (a, b) {
        return a.length - b.length;
    });
    var reversedArray = array.reverse();
    return reversedArray[0];
};

longestString("Hoist and Closure.");

const lgStr = str => (str.split(" ").sort((a,b) => a.length - b.length).reverse())[0];

// ES6
const longestString = (str = "string") => {
    let array = str.split(" ").sort((a, b) => a.length - b.length);
    let reversedArray = array.reverse();
    return reversedArray[0];
}

longestString("Hoist and Closure.")

// 3. Implementati o functie care accepta ca parametru un string si ii face 'reverse' 

// ES5
function reversedString (str) {
    if (typeof str !== "string") {
        return "Introduceti o valoare de tip string!";
    };

    return str.split("").reverse().join("")
}

reversedString("Bianca")

// ES6
const reversedString = (str = "string") => str.split("").reverse().join("");

// 4. Implementati o functie care accepta ca parametru un string si inlocuieste
// fiecare litera din acesta cu urmatoarea litera din alfabet

// ES5
// function alphabet (str) {
//     if (typeof str !== "string") {
//         return "Introduceti o valoare de tip string!";
//     };

//     var nextChar = "";
//     for (var i = 0; i <= str.length; i++) {
//       nextChar += str.charAt(i+1);  
//     };
//     return nextChar;
// };


// ES5
// Initial am folosit replace(), dar mi-a inlocuit doar primele doua litere
// de asemenea, folosisem str.charCodeAt() fara String.fromCharCode si-mi returna nr, nu urmatoarea litera,
// am search-uit putin si am ajuns la rezultatul asta

function replaceWithNext (str) {
    if (typeof str !== "string") {
        return "Introduceti o valoare de tip string!";
    };

    var newWord = "";
    for (var i = 0; i <= str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newWord += String.fromCharCode(str.charCodeAt(i) + 1);
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            newWord += String.fromCharCode(str.charCodeAt(i) + 1);
        };
    };
    return newWord;
};

replaceWithNext ("Bianca");

// ES6
const replaceWith = (str = "string") => {
    let newWord = "";
    for (let i = 0; i <= str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newWord += String.fromCharCode(str.charCodeAt(i) + 1);
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            newWord += String.fromCharCode(str.charCodeAt(i) + i);
        };
    };
    return newWord;
};

// 5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica
//  si o converteste la numarul de ore si minute corespunzatoare.
// Exemplu: input: 64  ->  output: 1:4

// se imparte valoarea la numarul de minute al unei ore x / 60;
// daca rezultatul contine rest, acesta reprezinta numarul de minute, deci: valoarea initiala - valoarea fixa = nr minute;
// valoarea fixa o aflam prin inmultirea numarului de ore cu 60 min;

// ES5
function convertToTime (number) {
    if (typeof number !== 'number') {
        return "Introduceti o valoare numerica!";
    };

    var division = number / 60;
    var hours = Math.trunc(division);
    var minutes = number - hours * 60;
    return hours + " hours " + " : " + minutes + " minutes ";
};

convertToTime (400);

// ES6 
const convertToTime = (number = "number") => {
    let division = number / 60; 
    let hours = Math.trunc(division);
    var minutes = number - hours * 60;
    return `${hours} hours : ${minutes} minutes`;
};

convertToTime(700);
convertToTime(175);

function convertToTime (number) { // Am incercat si asa dar nu a functionat
    if (typeof number !== 'number') {
        return "Introduceti o valoare numerica!";
    };

    var division = number / 60;
    var convertToArray = division.toString().split(".");
    var hours = convertToArray[0];
    var minutes = convertToArray[1];
    return hours + " hours " + " : " + minutes + " minutes ";
};

convertToTime (175);

// 6. Implementati o functie care accepta ca parametru un string si returneaza string-ul
// cu toate literele ordonate alfabetic

// ES5
function alphabeticalOrder (word) {
    if (typeof word !== "string") {
        return "This function accepts only words string!";
    };

    return word.split("").sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join("");
}

alphabeticalOrder ("Bianca");

// ES6
const alphabeticalOrder = (word = "string") => (word.split("").sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(""));
alphabeticalOrder ("Bianca")

// 7. Implementati o functie care accepta ca parametru un string si verifica daca 
// inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
// Exemplu: input: "+a+b+c+"   ->   output: true
// Exemply: input: "+ab+c+d+"  ->   output: false

//ES5
function beforeAfter (word) {
    if (typeof word !== "string") {
        return "This function accepts only words string!"
    };
    
    var beforeAfterArray = word.split("");
    var symbol = "+";
    for (var i = 1; i < word.length; i++) {
        if ((beforeAfterArray[i - 1]) === symbol && (beforeAfterArray[i + 1]) === symbol) {
            return true;
        } else {
            return false;
        };
    };
};

beforeAfter ("+a+a+a+a");
beforeAfter ("+ab+a+a+b");

// ES6
const beforeAfter = (word = "string") => {
    
    let symbol = "+";
    for (let i = 1; i <= word.length; i++) {
        return ((word.split("")[i - 1]) === symbol && (word.split("")[i + 1]) === symbol ? true : false);
    };
};

beforeAfter ("+a+a+a+a");
beforeAfter ("+ab+a+a+b");