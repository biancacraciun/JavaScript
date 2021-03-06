// 1.Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

// ES5
function protect_email(email) {
  var search_for = email.search('@');
  var entry = email.slice(0, 4);
  return entry + '..' + email.slice(search_for);
};

protect_email('craciunbiancas@yahoo.com');

// ES6
const protect_email = (email = "xyz@yahoo.com") => `${email.slice(0, 4)} ... ${email.slice(email.search('@'))}`
protect_email('craciunbiancas@yahoo.com');

// 2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

// ES5
function upperCase(text) {
  var array = [];
  var arr = text.split(" ");
  for (i = 0; i < arr.length; i++) {
    var uppercase = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    array.push(uppercase);
  };

  return array.join(" ");
};

upperCase('i am superman');

// ES6 
const upperCase = (text = "string") => {

  let array = [];
  let arr = text.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let uppercase = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    array.push(uppercase);
  };

  return array.join(" ")
};

upperCase('i am superman')

// 3.  Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

// ES5

function capitalize(text) { 
  var array = []; 
  if (typeof text !== "string") {
    return "Accept only string values";
  };

  var arr = text.split(''); 
  for (i = 0; i < arr.length; i++) { 
    var element = arr[i];
    if (element === element.toUpperCase()) { 
      var lower = element.toLowerCase();
      array.push(lower); 
    } else if (element === element.toLowerCase()) { 
      var upper = element.toUpperCase();
      array.push(upper); 
    };
  };

  return array.join(""); 
}

capitalize('XXxYyZzz') 

// ES6
const capitalize = (text = "string") => {

  let array = [];
  let arr = text.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      array.push(arr[i].toLowerCase());
    } else {
      array.push(arr[i].toUpperCase())
    }
  };

  return array.join("");
};

capitalize('XXxYyZzz');

// 4. Scrieti o functie care sa concateneze un string de cate ori ii zicem de ex:
//  myFunction("Wantsome", 2) sa printeze "WantsomeWantsome";
// // // // // // Pseudocod // // // // // // 
// 1. se declara functia cu doi parametri, care accepta o valoare de tip string si un numar;
// 2. functia returneaza expresia repetata de un anumit nr de ori;
// 3. apelarea functiei;

// ES5

function repeat(expression, nr) { // 1.

  if (typeof expression !== 'string') {
    return 'Introduceti o valoare de tip text!';
  };

  if (typeof nr !== 'number') {
    return 'Introduceti o valoare de tip numeric!';
  };

  return expression.repeat(nr); // 2.
};

repeat('Wantsome', 7); // 3.

// ES6
const repeat = (expression = "string", nr) => expression.repeat(nr);
repeat("Wantsome", 10);

// 5. A palindrome is a word or a phrase that is the same whether you read it backward or forwards,
// for example, the word 'level'.  Scrieti o functie care verifica daca un string este palindrom;
// Implementati mai multe variante

// ES5

function palindrome (expression) {

  if(typeof expression !== "string") {
    return "Introduceti o valoare de tip text!";
  }

  var exprLowercase = expression.toLowerCase();
  var exprArr = exprLowercase.split("");
  var reverseExpr = exprArr.reverse();
  var anotherWord = reverseExpr.join("");

  if (exprLowercase === anotherWord) {
    return "Cuvantul este palindrom!"
  } else {
    return "Cuvantul nu este palindrom!"
  }
}

palindrome('text')
palindrome('Eye') 
palindrome('eye')

// ES6
const palindrome = (expression = "string") => {

  let palindr = expression.toLowerCase().split("").reverse().join("");
  if (palindr === expression.toUpperCase()) {
    return "Cuvantul este palindrom!";
  } else {
    return "Cuvantul nu este palindrom!"
  }
};

palindrome('eye');
palindrome('Eye')
palindrome('text')

// 6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori
// numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

let largest_array = [
  [1, 2, 5],
  [5, 8, 10],
  [18, 5, 10]
]

const array_largest_nrs = arr => {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    let sort = index.sort((a, b) => a - b).reverse()
    result.push(sort[0])
  }
  return result;
};

array_largest_nrs(largest_array)

// 7. Implementati o functie care face reverse la un string

// // // // // // Pseudocod // // // // // // 
// 1. se declara functia cu un parametru;
// 2. daca parametrului nu i se atribuie o valoare de tip string, functia va returna
// "Functia accepta doar valori de tip string!";
// 3. altfel: 
// // a. valoarea atribuita parametrului va fi transformata in array;
// // b. array-ului obtinut i se va face reverse;
// // c. functia va returna valoarea inversata, dupa ce va fi transformata din nou in string;
// 4. apelarea functiei.

// ES5
function reverse_string(str) { 

  if (typeof str !== 'string') {
    return 'Functia accepta doar valori de tip string!'; 
  } else {
    return str.split("").reverse().join("");
  };
};

reverse_string('market') 

// ES6
const reverse_string = (str = "string") => str.split("").reverse().join("");
reverse_string("work hard");

// 8. Implementati o functie care calculeaza factorialul unui numar

// ES5
function factorial_of_a_number(nr) { 

  if (typeof nr !== 'number') {
    return "Functia accepta doar numere!"; 
  };

  if (nr === 0 || nr === 1) {
    return 1; 
  } else {
    for (i = nr - 1; i > 1; i--) { 
      nr *= i;
    };
  }; 
  return nr;
};

factorial_of_a_number(7); 

function factorialize(nr) {

  if (typeof nr !== 'number') {
    return "Functia accepta doar numere!";
  };

  if (nr === 0 || nr === 1) {
    return 1;
  };

  for (i = nr - 1; i > 1; i--) {
    nr *= i;
  };

  return nr;
};

factorialize(5);

//ES6 
const factorialize = nr => {

  nr === 0 && nr === 1 ? 1 : "try again";
  for (let i = nr - 1; i > 1; i--) {
    nr *= i;
  };
  return nr;
};

factorialize(7);

// 9. Implementati o functie care accepta ca argumente doua string-uri si
// verifica daca primul se termina cu cel din urma

// I.

//ES5
function accept_strings(str, string) { 

  if (typeof str !== 'string' && typeof string !== 'string') {
    return "Functia accepta doar valori de tip string!"; 
  };

  if (str.endsWith(string)) {
    return 'true: ' + str; 
  } else {
    return 'false: ' + str.concat(string); 
  };
};

accept_strings('home', 'x') 

//ES6
const accept_strings = (str = "string", string = "string") => str.endsWith(string) ? true : false;
accept_strings("home", "x");

// II.

function accept_strings(str, string) { 

  if (typeof str && string !== 'string') {
    return "Functia accepta doar valori de tip string!"; 
  };

  if (str.substr(- string.length) === string) {
    return "Primul string se termina cu cel de-al doilea!"; 
  } else {
    return "Al doilea string NU se regaseste la finalul celui dintai."; 
  };
}

accept_strings('home', 'me') 

// 10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. 
// Functia returneaza primul element din array care trece testul specificat

// Am incercat sa fac ceva aici, dar nu mi-a iesit. Imi returneaza doar daca numarul e primul in array

// function test(number) {
//   if (number <= 0) {
//     return false;
//   } else if (Math.sqrt(number) % 1 !== 0) {
//     return false;
//   } else {
//     return number;
//   };
// };

// function truth_function (arr, fn) {

//   for (i = 0; i <= arr.length; i++) {
//     if (test(arr[i])) {
//       return(arr[i]);
//     } else {
//       return "Nu exista nici un numar patrat perfect!"
//     };
//   };
// };

// truth_function([7, 2, 5, 15], test) // "Nu exista nici un numar patrat perfect!"
// truth_function([25, 10], test) // 25
// truth_function([7, 25, 100, 5], test) // "Nu exista nici un numar patrat perfect!"

function test(nr) {
  if (Math.sqrt(nr) % 2 === 0) {
    return "Numarul ESTE patrat perfect";
  } else {
    return "Numarul NU ESTE patrat perfect";
  }
};

function select_nr(arr, fn) {

  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return arr[i];
    }
  }
};

select_nr([25, 10], test)
select_nr([7, 25, 100, 5], test)

// 11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string
//  contine toate literele celui de-al doilea string

//ES5
function check_strings(str1, str2) { 

  var str2Array = str2.split(""); 
  for (var i = 0; i < str2Array.length; i++) {
    if (str1.includes(str2Array[i])) { 
      return true;
    } else {
      return false; 
    };
  };
};

check_strings("mineral", "chh") 
check_strings("mineral", "axy")

// ES6
const check_strings = (str1, str2) => {

  let str2Arr = str2.split("");
  let length = str2Arr.length;

  for(let i = 0; i < length; i++) {
    if(!(str1.includes(str2Arr[i]))) {
      return false;
    } else {
      return true;
    }
  }
}

check_strings("mineral", "chh") 
check_strings("mineral", "axy")

// 12. // Implementati o functie care accepta ca argumente doi parametri:
// un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
// cand intalneste elementul cu valoarea specificata

// ES5
function return_value(array, val) { 
  
  var final_arr = [];
  if (!Array.isArray(array)) {
    return "Introduceti un array!";
  };

  for (i = 0; i < array.length; i++) { 
    final_arr.push(array[i]);
    if (array[i] === val) { 
      return final_arr;
    };
  };
};

return_value([1, 8, 9, 15, 49, 81], 15) 

// ES6
const return_value = (array, val) => {

  let final_arr = [];
  if (!Array.isArray(array)) {
    return "Introduceti un array!";
  };

  for(let i = 0; i < array.length; i++) {
    final_arr.push(array[i]);

    if(array[i] === val) {
      return final_arr;
    }
  }
};

return_value([1, 8, 9, 15, 49, 81], 15)

// 13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

// ES5
function remove_false_value(array) { 

  var final_array = [];
  if (!Array.isArray(array)) { 
    return "Introduceti un array!"
  };

  for (i = 0; i < array.length; i++) { 
    if (array[i]) {
      final_array.push(array[i])
    };
  };

  return final_array; 
};

remove_false_value([null, undefined, "", 5, 7, 0, undefined, "string", NaN]) 

// ES6
const remove_false_value = array => {
  let final_array = [];
  if(!Array.isArray(array)) {
    return "Introduceti un array!"
  }

  for (let i = 0; i < array.length; i++) {
    if(array[i]) {
      final_array.push(array[i])
    }
  }

  return finaly_array;
}

remove_false_value([null, undefined, "", 5, 7, 0, undefined, "string", NaN]);

// 14. Scrieti o functie care repeta un string de n ori specificate

//ES5
function repeat(str, nr) {
  if (typeof str !== 'string') {
    return "Introduceti o valoare de tip string!";
  };

  if (typeof nr !== 'number') {
    return "Introduceti o valoare numerica!";
  };

  return str.repeat(nr);
};

repeat("Oau", 7);

//ES6
const repeat = (str = "string", nr = "number") => str.repeat(nr);
repeat("Oau", 7);