// 1. Scrieti un for care itereaza de la 0 la 20. Pentru ﬁecare iteratie,
// veriﬁca daca numarul curent este par sau impar si va raporta acest 
// lucru in consola. (exemplu: “2 este numar par”); 
// Scrieti functia in doua variante: while si for:

// I.

// // // // // // Pseudocod // // // // // //
// 1. declararea functiei si specificarea parametrului: function iteration 
// cu un singur parametru 'nr';
// 2. daca argumentul nu este de tip number, functia se va opri; 
// 3. //FOR// incepand de la 0 (i = 0) pana la 20 (i <= 20), la valoarea 
// lui i se adauga 1 (incrementare: i++):
// // a. daca valoarea lui i este divizibila cu doi, atunci nr este par,
// // iar functia va afisa "Numarul i este par.";
// // b. altfel functia va afisa "Numarul i este impar."
// 4. apelarea functiei.

function iteration(nr) { // 1.

    if (typeof nr !== 'number') {
        return "Introduceti o valoare de tip numeric!"
    }; // 2.

    for (i = 0; i <= 20; i++) { // 3.
        if (i % 2 === 0) {
            console.log('Numarul ' + i + ' este par.'); // a.
        } else {
            console.log('Numarul ' + i + ' este impar.'); // b.
        }
    };
};

iteration(2) // 4.

// II.

// // // // // // Pseudocod // // // // // // 
// 1. declararea functiei si specificarea parametrului: function iteration 
// cu un singur parametru 'nr';
// 2. daca argumentul nu este de tip number, functia se va opri; 
// 3. declararea variabilei i (i = 0);
// 4. // WHILE // cat timp variabila i ia o valoare <= 20, incepand de la 0 (i = 0):
// // a. daca valoarea variabilei i este divizibila cu 2, numarul este par
// // ("Numarul i este par.");
// // b. altfel numarul este impar ("Numarul i este impar.");
// // c. se declara operatorul de incrementare (i++);
// 5. apelarea functiei.

function iteration(nr) { // 1.

    if (typeof nr !== 'number') { // 2.
        return 'Introduceti o valoare de tip numeric!'
    }

    var i = 0; // 3.
    while (i <= 20) { // 4.
        if (i % 2 === 0) {
            console.log('Numarul ' + i + ' este par.'); // a.
        } else {
            console.log('Numarul ' + i + ' este impar.'); // b.
        }
        i++; // c.
    };
};

iteration(2) // 5.

// III.

function iteration (nr) {

    var i = 0;
    do {
        if (i % 2 === 0) {
            console.log("Numarul " + i + " este par.");
        } else {
            console.log("Numarul " + i + " este impar.")
        }
        i++;
    }
    while (i <= 20);
};

iteration(7)

// 2. Scrieti un for care itereaza de la 0 la 10. Pentru ﬁecare iteratie, 
// se va multiplica numarul curent cu 9 si se va aﬁsa rezultatul. 
// (exemplu: “3*9=27”).            
// Scrieti functia in doua variante: while si for

// I.

// // // // // // Pseudocod // // // // // // 
// 1. declararea functiei si specificarea parametrului: function multiplied
// cu un singur parametru (nr);
// 2. daca argumentul nu este de tip number, functia se va opri; 
// 3. //FOR// incepand de la 0 (i = 0) pana la 10 (i <= 10), la valoarea lui i 
// se adauga 1 (incrementare: i++);
// 4. for-ul va afisa rezultatul inmultirii dintre valoarea variabilei i cu cifra 9;
// 5. apelarea functiei.

function multiplied (nr) { // 1.

    if (typeof nr !== 'number') {
        return "Introduceti o valoare de tip numeric!"; // 2.
    };

    for (i = 0; i <= 10; i++) { // 3.
        console.log(i * 9); // 4.
    }
};

multiplied(7) // 5.

// II.

// // // // // // Pseudocod // // // // // // 
// 1. declararea functiei si specificarea parametrului: function multiplied
// cu un singur parametru 'nr';
// 2. daca argumentul nu este de tip number, functia se va opri; 
// 3. declararea variabilei i = 0;
// 4. //WHILE// cat timp valoarea lui i este <= 9, incepand de la 0 (i = 0),
// functia va afisa rezultatul inmultirii valorii lui i cu cifra 9;
// 5. se declara operatorul de incrementare (i++);
// 6. apelarea functiei.

function multiplied(nr) { // 1.

    if (typeof nr !== 'number') {
        return "Introduceti o valoare de tip numeric!"; // 2.
    }

    var i = 0; // 3.
    while (i <= 9) {
        console.log(i * 9); // 4.
        i++; // 5.
    };
};

multiplied(4) // 6.

// III.

function multiplied(nr) {

    if (typeof nr !== 'number') {
        return 'Introduceti o valoare de tip numeric!';
    }

    var i = 0;
    do {
        console.log(i * 9)
        i++;
    }
    while (i <= 9);
}

multiplied(7)

//  3. Pentru ﬁecare cifra de la 1 la 10, aﬁsati tabla inmultirii. 
// (exemplu: 1 * 0 = 0      1 * 1 = 1      …      1 * 10 = 10 ) 
// Pentru a aﬁsa in consola pe linie noua puteti concatena un string, 
// la ﬁnal, cu + “\n”.

// // // // // // Pseudocod // // // // // // 
// 1. declararea functiei;
// 2. se declara primul termen pentru operatia de inmultire:
//1st FOR// incepand de la 0 (i = 0) pana la 10 (i <= 10),
// la valoarea lui i se adauga 1 (incrementare: i++);
// 3. in for-ul anterior se mai adauga inca un for care reprezinta al doilea termen al 
// operatiei de inmultire: //2nd FOR// incepand de la 0 (n = 0) la 10 (n <= 10),
// la valoarea lui n se adauga 1 (incrementare: n++);
// 4. al doilea for va afisa operatia de inmultire dintre i si n;
// 5. apelarea functiei;

function multiplication_table () { // 1.

    for (i = 0; i <= 10; i++) { // 2.
        for (n = 0; n <= 10; n++) { // 3.
            console.log(i + ' * ' + n + ' = ' + i *  n); // 4.
        }
    }
};

multiplication_table () // 5.

// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, veriﬁcati 
// si aﬁsati in consola ﬁecare caliﬁcativ care se poate obtine pentru punctajele
// incepand de 1 la 10. (exemplu: “Pentru 2, obtii caliﬁcativul E. \n  Pentru 7,
//  obtii caliﬁcativul B \n ...samd “). 
// Atentie: Rezultatul caliﬁcativului trebuie sa ﬁe obtinut prin utilizarea functiei 
// dezvoltate la tema anterioara !

// I.

// // // // // // Pseudocod // // // // // // 
// 1. declararea functiei cu parametrul aferent;
// 2. se declara o variabila care stocheaza calificativele corespunzatoare punctajelor (var qualif);
// 3. pentru fiecare interval numeric, var qualif ia o alta valoare;
// 4. daca parametrul nr apartine intervalului [1, 3), var qualif = 'E';
// 5. altfel daca nr apartine intervalului [3,6], var qualif = 'D';
// 6. altfel daca nr apartine intervalului [7,8], var qualif = 'B';
// 7. altfel daca nr = 9, var qualif = 'A';
// 8. altfel daca nr = 10, var qualif = 'A+';
// 9. in alte conditii, functia va returna "Nu exista calificativ!".
// 10. (functia principala returneaza 'Calificativul corespunzator punctajului ' + parametrul nr + 
// + ' este ' + var qualif;) pentru cazul actual, functia va returna valoarea variabilei qualif;
// 11. //FOR// incepand de la 1 (i = 1, deoarece punctajul aferent calificativelor incepe de la 1) 
// si pana la 10 (i <= 10), la valoarea lui i se adauga 1 (incrementare: i++); 
// In aceste conditii, for-ul va afisa "Pentru nota " + i + " obtii calificativul " + note(i) (valorile
// pe care le preia variabila qualif in cadrul functiei note () )

var note = function (nr) { // 1.

    var qualif; // 2.
    if (nr >= 1 && nr < 3) {
      qualif = 'E'; // 4.
    } else if (nr >= 3 && nr <= 6) {
      qualif = 'D'; // 5.
    } else if (nr >= 7 && nr <= 8) {
      qualif = 'B'; // 6.
    } else if (nr === 9) {
      qualif = 'A'; // 7.
    } else if (nr === 10) {
      qualif = 'A+'; // 8.
    } else {
      return 'Nu exista calificativ!';
    }
    return qualif;
};
  
for (i = 1; i <= 10; i++) {
    console.log("Pentru nota " + i + " obtii calificativul " + note(i));
};

// II.

// In tema anterioara functia imi returna:
// "Calificativul corespunzator punctajului ' + nr + ' este ' + qualif + '."
// Am pornit de la apelarea functiei: console.log(note(7)).
// Mi-am dat seama apoi ca trebuie sa schimb valoarea return, fiindca aveam nevoie
// doar de valoarea variabilei qualif: return qualif;
// Dupa schimbare console.log(note(7)) imi returna doar calificativul.
// Argumentul pe care il dau functiei reprezinta de fapt variabila i din functia for.
// Punctajul din functie incepe de la 1, deci i = 1, si creste pana la 10, deci i <= 10
// si i++;
// Pentru situatia precizata, for-ul imi va afisa:
// "Pentru nota " + i + " obtii calificativul " + note(i), adica valoarea variabilei qualif, 
// pe care o accesez prin apelarea functiei note cu argumentul i, adica valorile de la 1 la 10.

var note = function(nr) {

    var qualif;
    switch(true) {
      case nr >= 1 && nr < 3:
        qualif = 'E';
        break;
      case nr >= 3 && nr <= 6:
        qualif = 'D';
        break;
      case nr >= 7 && nr <= 8:
        qualif = 'B';
        break;
      case nr === 9:
        qualif = 'A';
        break;
      case nr === 10:
        qualif = 'A+';
        break;
      default: 'undefined';
        break;
    }
    return qualif;
};
  
for (i = 1; i <= 10; i++) {
    console.log("Pentru nota " + i + " obtii calificativul " + note(i));
};