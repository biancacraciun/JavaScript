// 1. Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea 
// ori pe ecran textul: “Sunt la iteratia numarul [index]” - Scrieti codul in doua variante

function number(x) {
    if (typeof x !== 'number') {
        return false;
    };

    for (i = 0; i < x; i++) {
        console.log('Sunt la iteratia numarul ' + i + '.')
    };
}
number(15);

function number(x) {
    if (typeof x !== 'number') {
        return false;
    };

    var i = 0;
    while (i < x) {
        console.log('Sunt la iteratia numarul ' + i + '.');
        i++;
    };
}
number(10);

// 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele 
// acestuia prin parcurgerea sa -
// Scrieti codul in doua variante

function array(x) {
    if (!Array.isArray(x)) {
        return false;
    }
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

array(['string', 7]);
array(7);

function array(x) {
    if (!Array.isArray(x)) {
        return false;
    };

    var i = 0;
    while (i < x.length) {
        console.log(x[i]);
        i++;
    };
}

array(['string', 'string2', 7]);

// 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia
// prin parcurgerea sa -
// scrieti codul in doua variante

var mmm = { name: 'Bianca', gender: 'feminin', age: 22 }
var keys = Object.keys(mmm);
var len = keys.length;

console.log(keys);
console.log(object[keys[0]]);

function accept_object(x) {
    for (var keys in x) {
        console.log(keys);
    }
};

accept_object(object)

// 4. 
// case 1:
var array = [];
function hundred(nr) {
    for (i = 0; i <= nr; i++) {
        array.push(i * 100);
    };
    console.log(array.join(" "));
}

hundred(10)

var array = [];
function hundred(nr) {
    var i = 0;
    while (i <= nr) {
        array.push(i * 100);
        i++;
    }
    console.log(array.join(" "));
}

hundred(10)

// case 2:
var array = [];
function sum(nr) {
    for (i = 1; i <= nr; i += i) {
        array.push(i);
    }
    console.log(array.join(" "));
}

sum(150)

//  case 3:
var array = [];
function even(nr) {
    for (i = 0; i <= nr; i++) {
        array.push(i * 2);
    }
    console.log(array.join(" "));
}

even(5)

// case 4:
var array = [];
function three (nr) {
    for (i = 0; i <= nr; i += 3) {
        array.push(i + 3);
    }
    console.log(array.join(" "));
}

three(13)


var array = [];
function decr(nr) {
    for (i = nr; i >= 3; i -= 3) {
        array.push(i);
    }
    console.log(array.join(" "));
}

decr(15)

// case 5:
var array = [];
function decrement(nr) {
    for (i = nr; i >= 0; i--) {
        array.push(i);
    }
    console.log(array.join(" "))
}

decrement(9)

// case 6:
var array = [];
function repeat(nr) {
    for (i = 1; i <= nr; i++) {
        var rep = i.toString();
        array.push(rep.repeat(3));
    }
    console.log(array.join(" "))
};

repeat (7)

// case 7: 
// Aici nu mi-a iesit spatiul dintre serii; 
var array = []; 
function rep (nr) {
    for (i = 0; i <= nr; i++) {
        array.push(i)
        var again = array.join(" ")
    }
    console.log(again.repeat(3))
}

rep (4) // 0 1 2 3 40 1 2 3 40 1 2 3 4

// 5. Implementati functia stream. Trebuie sa:                                                                                          
// ● accepte ca argumente 2 functii: conditionalFn, actionFn. 
// ● apeleaza actionFn pana cand conditionalFn returneaza fals 
// ● nu returneaza nimic

function conditionalFn () {
    return false;
};

function actionFn () {
    for (i = 0; i <= 10; i--) {
        return "Vreau sa ies la tabla!";
    };
};

function stream (fn1, fn2) {
    return 
}
stream(conditionalFn, actionFn)
// 6. Implementati functia computeSumOfArrayElements. 
// Trebuie sa:
// ● accepte ca argument un array format din numere 
// ● returneze suma numerelor din array 
// ● foloseasca instructiunea while

// Mai este si alta metoda? 

function computeSumOfArrayElements (arr) {
    var i = 0;
    while (i <= arr.length) {
        var sum = arr.reduce(function (a, b) {
            return (a + b);
        });
        i++;
    };

    return sum;
};

computeSumOfArrayElements([7, 12])


// function computeSumeOfArrayElements (array) {
//     if (!Array.isArray(array)) {
//       return "Introduceti un argument de tip array!"
//     }
    
//     for (i = 0; i <= array.length; i++) { 
//       if (typeof (array[i]) !== 'number') {
//       return 'Introduceti un array de tip numeric!';
//       }
//     }
    
//     var sum = 0;
//     var i = 0;
//     while (i <= array.length){
//       sum += array[i];
//       i++;
//     }
//     return sum;
// }

// computeSumeOfArrayElements([7, 12])