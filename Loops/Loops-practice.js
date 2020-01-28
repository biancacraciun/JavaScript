// 1. Scrieti un for care itereaza de la 0 la 20. Pentru ﬁecare iteratie,
// veriﬁca daca numarul curent este par sau impar si va raporta acest 
// lucru in consola. (exemplu: “2 este numar par”); 
// Scrieti functia in doua variante: while si for:

// I.

function iteration(nr) { 

    if (typeof nr !== 'number') {
        return "Introduceti o valoare de tip numeric!"
    }; 

    for (i = 0; i <= 20; i++) { 
        if (i % 2 === 0) {
            console.log('Numarul ' + i + ' este par.'); 
        } else {
            console.log('Numarul ' + i + ' este impar.'); 
        }
    };
};

iteration(2) 

// II.

function iteration(nr) { 

    if (typeof nr !== 'number') { 
        return 'Introduceti o valoare de tip numeric!'
    }

    var i = 0; 
    while (i <= 20) { 
        if (i % 2 === 0) {
            console.log('Numarul ' + i + ' este par.');
        } else {
            console.log('Numarul ' + i + ' este impar.'); 
        }
        i++; 
    };
};

iteration(2) 

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

function multiplied (nr) { 

    if (typeof nr !== 'number') {
        return "Introduceti o valoare de tip numeric!"; 
    };

    for (i = 0; i <= 10; i++) { 
        console.log(i * 9); 
    }
};

multiplied(7) 

// II.

function multiplied(nr) { 

    if (typeof nr !== 'number') {
        return "Introduceti o valoare de tip numeric!"; 
    }

    var i = 0; 
    while (i <= 9) {
        console.log(i * 9); 
        i++; 
    };
};

multiplied(4) 

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

function multiplication_table () { 

    for (i = 0; i <= 10; i++) { 
        for (n = 0; n <= 10; n++) { 
            console.log(i + ' * ' + n + ' = ' + i *  n); 
        }
    }
};

multiplication_table () 

// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, veriﬁcati 
// si aﬁsati in consola ﬁecare caliﬁcativ care se poate obtine pentru punctajele
// incepand de 1 la 10. (exemplu: “Pentru 2, obtii caliﬁcativul E. \n  Pentru 7,
//  obtii caliﬁcativul B \n ...samd “). 
// Atentie: Rezultatul caliﬁcativului trebuie sa ﬁe obtinut prin utilizarea functiei 
// dezvoltate la tema anterioara !

// I.

var note = function (nr) { 

    var qualif; 
    if (nr >= 1 && nr < 3) {
      qualif = 'E'; 
    } else if (nr >= 3 && nr <= 6) {
      qualif = 'D'; 
    } else if (nr >= 7 && nr <= 8) {
      qualif = 'B'; 
    } else if (nr === 9) {
      qualif = 'A'; 
    } else if (nr === 10) {
      qualif = 'A+'; 
    } else {
      return 'Nu exista calificativ!';
    }
    return qualif;
};
  
for (i = 1; i <= 10; i++) {
    console.log("Pentru nota " + i + " obtii calificativul " + note(i));
};

// II.

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