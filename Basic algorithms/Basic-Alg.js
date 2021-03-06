// 1. Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere 
// daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
// ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100;

// ES5
function operation(nr1, nr2) {

    if (nr1 !== nr2) {
        return nr1 + nr2;
    } else if (nr1 === nr2) {
        return (nr1 + nr2) * 5;
    };
}

operation(7, 2);

// ES6 
const operation = (nr1, nr2) => (nr1 === nr2) ? (nr1 + nr2) * 5 : nr1 + nr2;
operation(7, 2);

// 2. Vreau sa am o functie care sa returneze true daca ambele numere sunt egale
// cu 30 sau daca suma lor este egala cu 30 
// ex testFunction(30, 30) - true 
// testFunction(15,15) - true
// testFunction(10, 15) - false

// ES5
function sum(nr1, nr2) {
    return (nr1 && nr2 === 30 || nr1 + nr2 === 30)
};

sum(12, 15);

// ES6
const sum = (nr1, nr2) => nr1 && nr2 === 30 || nr1 + nr2 === 30
sum(12, 15);

// 3. Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS'
// sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

// ES6
const checkString = (str = "string") => (str === null ? 'JS' : str.toUpperCase().startsWith('JS') ? str : 'JS'.concat(str));
checkString("awesome");

// ES5
function checkString(str) {

    const JS = 'JS';
    if (str === null) {
        return JS;
    } else if (str.toUpperCase().startsWith(JS)) {
        return str;
    } else {
        return JS.concat(str);
    };
};

checkString('JSisAwesome');
checkString('isEasy');
checkString(null);

// 4. Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

// ES6
const removeDuplicates = value => { 
    
    let arr = [];
    for(let i = 0; i < value.length; i++) {
        if (arr.indexOf(value.charAt(i)) === -1){
            arr.push(value.charAt(i))
        }
    }
    return arr.join("")
}

removeDuplicates('hhhsbhshj') 

// ES5
function removeDuplicates (value) {

    var arr = [];
    for (i = 0; i < value.length; i++) {
        if (arr.indexOf(value.charAt(i)) === -1) {
            arr.push(value.charAt(i))
        };
    };
    return arr.join("");
};

removeDuplicates('hhhsbhshj') 

// 5. Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

// ES5
function findLongestString(string) {

    let array = string.split(" ");
    let longestString = array.sort(function (a, b) { return a.length - b.length });
    let reverse = longestString.reverse();
    return reverse[0];
}

findLongestString('Wantsome is Awsomeeee today');

// ES6
const findLongestString = (string = "string") => (string.split(" ").sort((a, b) => a.length - b.length).reverse())[0];
findLongestString("Wantsome is Awesomeeee today");

// 6. Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

function pyramid(nr) {

    let symbol = "*";
    for (i = 0; i <= nr; i++) {
        let repeat = symbol.repeat(i);
        console.log(repeat)
    };
};

pyramid(5);

// 7. append any negative numbers found in the numbers array into the negativeNumbers array constant variable above

// ES5
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        return "Functia accepta doar valori de tip array!";
    };

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        };
    };
    return negativeNumbers;
};

extractNegativeNumbers([1, 2, -5, 4, -6]);

// ES6
const negativeNumbers = [];

const extractNegativeNumbers = (numbers = []) => {
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i])
        };
    };
    return negativeNumbers;
};

extractNegativeNumbers([1, 2, -5, 4, -6]);


// 8. Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul 
// in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

// ES5
function operators(nr1, nr2, operator) {
    if (typeof nr1 !== 'number' && typeof nr2 !== 'number') {
        return "Introduceti valori numerice!";
    };

    if (typeof operator !== 'string') {
        return "Scrieti denumirea operatiei!";
    };

    var calculation;
    switch (operator) {
        case 'add':
            calculation = nr1 + nr2;
            break;
        case 'substract':
            calculation = nr1 - nr2;
            break;
        case 'multiply':
            calculation = nr1 * nr2;
            break;
        case 'divide':
            calculation = nr1 / nr2;
            break;
    };

    return calculation;
}

operators(7, 5, "add");

// ES5
const operators = (nr1, nr2, operator) => {

    let calculation;
    switch (operator) {
        case 'add':
            calculation = nr1 + nr2;
            break;
        case 'substract':
            calculation = nr1 - nr2;
            break;
        case 'multiply':
            calculation = nr1 * nr2;
            break;
        case 'divide':
            calculation = nr1 / nr2;
            break;
    }

    return calculation
};

operators(7, 5, "add");

//9. Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5
//  au ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

//ES5
function isDiv(nr) {
    if (typeof nr !== 'number') {
        return "Introduceti o valoare numerica!";
    };

    if (nr % 3 === 0 && nr % 5 === 0) {
        return 'BOTH';
    } else if (nr % 5 === 0) {
        return 'FIVE';
    } else if (nr % 3 === 0) {
        return 'THREE';
    } else {
        return nr;
    };
};

isDiv(15);

//ES6
const isDiv = nr =>  {
    if (nr % 3 === 0 && nr % 5 === 0) {
        return "BOTH";
    } else if (nr % 5 === 0) {
        return "FIVE";
    } else if (nr % 3 === 0) {
        return "THREE";
    } else {
        return nr;
    }
};

isDiv(15);

// 10. Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

// ES6 
const dayAndHour = () => {

    const days = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    let weekDays = new Date();

    let getHours = weekDays.getHours();
    let getMinutes = weekDays.getMinutes() < 10 ? `0${weekDays.getMinutes()}` : weekDays.getMinutes();
    let getSeconds = weekDays.getSeconds();

    return `Azi este ${days[weekDays.getDay()]}. Este ora ${getHours}: ${getMinutes}: ${getSeconds}`;
};

dayAndHour()

const dayAndHours = () => {

    const days = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    const weekDays = new Date();
    
    let getDays = weekDays.getDay();
    let getHours = weekDays.getHours() > 12 ? weekDays.getHours() - 12 : weekDays.getHours();
    let meridian = weekDays.getHours >= 12 ? "PM" : "AM";
    let getMinutes = weekDays.getMinutes() < 10 ? `0${weekDays.getMinutes()}` : weekDays.getMinutes();
    let getSeconds = weekDays.getSeconds() < 10 ? `0${weekDays.getSeconds()}` : weekDays.getSeconds();

    return `Este ${days[getDays]}, ora ${getHours}${meridian}:${getMinutes}:${getSeconds}`
};

dayAndHours()

// 11. ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre.
// Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

// Regex: 
// \d - find a digit;
// \b - find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b;

// ES5
function validPin(number) {
    if (typeof number !== 'string') {
        return false;
    };

    if (/^(\d{4}|\d{6})$/.test(number)) {
        return true;
    } else {
        return false;
    };
};

validPin('1234');
validPin('12345');
validPin('z23f');

// ES6
const validPin = number => /^(\d{4}|\d{6})$/.test(number) ? true : false;
validPin ("1234");

// 12. Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

// g - global match;
// i - case-insensitive matching;
// [] - find any character between the brackets;

// ES5
function removeVowels(string) {
    if (typeof string !== 'string') {
        return "Functia accepta doar valori de tip text!"
    };

    return string.replace(/[aeiou]/gi, "");
};

removeVowels("Hey, I am developer!");
removeVowels("Hello World!");

// ES6
const removeVowels = (string = "string") => string.replace(/[aeiou]/gi, "");
removeVowels("Hey, I am developer!");
removeVowels("Hello World!");

// 13. Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

// ES5
function isSquareNumber(nr) {
    if (typeof nr !== 'number') {
        return "Introduceti o valoare numerica!";
    };

    if (Math.sqrt(nr) % 1 === 0) {
        return true;
    } else {
        return false;
    };
};

isSquareNumber(25);
isSquareNumber(3);

// ES6
const isSquareNumber = (nr) => Math.sqrt(nr) % 1 === 0 ? true : false;
isSquareNumber(25);
isSquareNumber(3);

// 14. Vreau sa am o functie care sa verifice daca un cuvant este o anagrama - 
// daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

// ES5
function isAnagram (str, string) {

    if (typeof str !== 'string' && typeof string !== 'string') {
        return "Introduceti doua cuvinte!";
    };

    let transform1 = str.toUpperCase().split("").sort().join("");
    let transform2 = string.toUpperCase().split("").sort().join("");

    if (transform1 === transform2) {
        return true;
    } else {
        return false;
    };
};

isAnagram("silent", "listen");

// ES6 
const isAnagram = (str = "string", string = "string") => str.toUpperCase().split("").sort().join("") === string.toUpperCase().split("").sort().join("") ? true
: false;
isAnagram("silent", "listen");