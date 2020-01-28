// 1. Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatesNrBetween (x, y) {
    if (x > y) {
        return "Numarul mai mare dintre " + x + " si " + y + " este " + x;
    } else if (x === y) {
        return "Numarul " + x + " este egal cu numarul " + y;
    } else {
        return "Numarul mai mic este " + y;
    }
};

greatesNrBetween(5, 2);

// 2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// - Primeste ca argument codul unei limbi: “en”, “es”, “de”
// - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi ) 
// - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
// Apelati functia pentru fiecare caz in parte.

var helloWorldInLang = function (language) {

  switch(language) {
    case 'en':
      console.log("Hello World!");
      break;
    case 'ro':
      console.log("Hei!");
      break;
    case 'fr':
      console.log("Bonjour!");
      break;
    default:
      console.log("Hello World!");
  }
};

helloWorldInLang('en');
helloWorldInLang('ro');
helloWorldInLang('fr');
helloWorldInLang('es');

// 3. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) 
// si calculeaza taxa corespunzatoare considerand urmatoarele criterii:
// - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
// - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35% 
// - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
// Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”

var pay = function (earning) {

  if (earning < 30000) {
      return "Pentru un venit anual de " + earning + " nu aveti de platit taxa";
  } else if (earning >= 50000 && earning <= 99999) {
      return "Pentru un venit anual de  " + earning + " aveti de platit taxe in valoare de " + earning * 30 / 100;
  } else {
      return "Pentru un venit anual de " + earning + " aveti de platit taxe in valoare de " + earning * 40 / 100;
  } 
};

pay(70000);

// Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si afiseaza:
// - AA if points is greater than 90
// - AB if points is greater than 80  and less than or equal to 90 
// - BB if points is greater than 70 and less than or equal to 80 
// - BC if points is greater than 60 and less than or equal to 70 
// - CC if points is greater than 50 and less than or equal to 60 
// - CD if points is greater than 40 and less than or equal to 50 
// - DD if points is greater than 30 and less than or equal to 40 
// - FF if points is less than or equal to  30

var compare = function (points) {

  if (points > 90) {
    return 'AA';
  } else if (points > 80 && points <= 90) {
      return 'AB';
  } else if (points > 70 && points <= 80) {
      return 'BB';
  } else if (points > 60 && points <= 70) {
      return 'BC';
  } else if (points > 50 && points <= 60) {
      return 'CC';
  } else if (points > 40 && points <= 50) {
      return 'CD'; 
  } else if (points > 30 && points <= 40) {
      return 'DD';
  } else if (points <= 30) {
      return 'FF';
  }
};
  
compare(42);

// Scrieti o functie care testeaza daca o anumita data introdusa este weekend: 
// Test Data : 
// console.log(is_weekend('Nov 15, 2014')); 
// console.log(is_weekend('Nov 16, 2014')); 
// console.log(is_weekend('Nov 17, 2014')); 
// Output : "weekend" "weekend" undefined

function is_weekend (wd) {
  var today = new Date(wd)
  var weekend = "";

  if (today.getDay() === 0 || today.getDay() === 6) {
    weekend += 'weekend';
  }

  return weekend;
}
  
is_weekend('Nov 15, 2014')