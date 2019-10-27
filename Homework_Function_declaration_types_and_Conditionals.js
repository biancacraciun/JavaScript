// 1. se declara functia validate_Gender cu parametrul SSN;
// 2. valoarea numerica a parametrului SSN se transforma in string (SSN_string)
// 3. daca prima cifra din sirul de numere (SSN_string) este 1,
// atunci functia va returna gender M;
// 4. altfel daca prima cifra din sirul de numere (SSN_string) este 2, 
// atunci functia va returna gender F;
// 5. altfel daca prima cifra din sirul de numere (SSN_string) este 3,
// atunci functia va returna gender M;
// 6. altfel daca prima cifra din sirul de numere (SSN_string) este 4,
// atunci functia va returna gender F;
// 7. altfel daca prima cifra din sirul de numere (SSN_string) este 5,
// atunci functia va returna gender M;
// 8. altfel daca prima cifra din sirul de numere (SSN_string) este 6,
// atunci functia va returna gender F;
// 9. altfel functia va returna faptul ca persoana este rezidenta
// straina;

// EX. 1

function validate_Gender (SSN) {
  var SSN_string = SSN.toString();
  if (SSN_string.charAt(0) === 1) {
    return 'Persoana verificata este de sexul M';
  } else if (SSN_string.charAt(0) === '2') {
    return 'Persoana verificata este de sexul F';
  } else if (SSN_string.charAt(0) === '3') {
    return 'Persoana verificata este de sexul M';
  } else if (SSN_string.charAt(0) === '4') {
    return 'Persoana verificata este de sexul F';
  } else if (SSN_string.charAt(0) === '5') {
    return 'Persoana verificata este de sexul M';
  } else if (SSN_string.charAt(0) === '6') {
    return 'Persoana verificata este de sexul F';
  } else {
    return 'Persoana verificata este rezidenta straina.';
  }
};
  
console.log(validate_Gender('2970220225894'));

// 1. se declara functia cu parametrul nr;
// 2. fiecare calificativ este reprezentat de o variabila;
// 3. fiecarui interval numeric i se va atruibui o variabila anterior declarata;
// 4. daca parametrul nr face parte din intervalul [1, 3), functia va returna
// calificativul asociat variabilei insufficient;
// 5. altfel daca parametrul nr face parte din intervalul [3,6], functia va returna
// calificativul D;
// 6. altfel daca parametrul nr face parte din intervalul [7,8], functia va returna
// calificativul B;
// 7. altfel daca parametrul nr este egal cu 9, functia va returna calificativul A;
// 8. altfel daca parametrul nr este egal cu 10, functia la returna calificativul A+;
// 9. in alte conditii, functia va returna undefined.

// EX. 2

var note = function (nr) {
  var insufficient = 'E';
  var sufficient = 'D';
  var good = 'B';
  var quiteGood = 'A';
  var veryGood = 'A+';
    
  if (nr >= 1 && nr < 3) {
    return 'Calificativul corespunzator punctajului ' + nr + ' este ' + insufficient + '.';
  } else if (nr >= 3 && nr <= 6) {
    return 'Calificativul corespunzator punctajului ' + nr + ' este ' + sufficient + '.';
  } else if (nr >= 7 && nr <= 8) {
    return 'Calificativul corespunzator punctajului ' + nr + ' este ' + good + '.';
  } else if (nr === 9) {
    return 'Calificativul corespunzator punctajului ' + nr + ' este ' + quiteGood + '.';
  } else if (nr === 10) {
    return 'Calificativul corespunzator punctajului ' + nr + ' este ' + veryGood + '.';
  } else {
    return 'undefined';
  }
};
   
console.log(note(10));


// 1. se declara functia cu parametrul car_name;
// 2. se declara o variabila care reprezinta un array cu numele oraselor;
// 3. pentru fiecare brand auto se va asocia o tara;
// 4. daca brandul masinii este Mazda, tara va fi Japonia;
// 5. elementele din array vor fi selectate cu index number;
// 6. daca brandul masinii este Hyundai, functia va returna "Marca Hyundai
// se produce in Coreea de Sud": "Marca " + car_name + " se produce in " +
// numarul elementului din array corespunzator tarii producatoare;
// 7. in cazul in care brandul introdus nu face parte dintre cele precizare in
// functie, aceasta va returna "Marca este necunoscuta!";

// EX. 3

var anonymous = function (car_name) {
    var country_name = ['Japonia', 'Coreea de Sud', 'Regatul Unit', 'Italia'];
      
    if (car_name === 'Mazda') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[0];
    } else if (car_name === 'Hyundai') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[1];
    } else if (car_name === 'Bentley') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[2];
    } else if (car_name === 'Rolls-Royce') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[2];
    } else if (car_name === 'Alfa-Romeo') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[3];
    } else if (car_name === 'Pagani') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[3];
    } else if (car_name === 'Mitsubishi') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[0];
    } else if (car_name === 'Nissan') {
        return 'Marca ' + car_name + ' se produce in ' + country_name[0];
    } else {
        return 'Marca este necunoscuta.';
    }
};

console.log(anonymous('Mazda'));


// 1. se declara functia cu parametrul car_name;
// Initial am incercat sa atribui tarile fara sa folosesc o variabila, 
// insa a observat in enunt ca trebuie generata si valoarea corespunzatoare tarii;
// 2. se declara variabila country_name;
// 3. folosesc switch(car_name);
// 4. pentru fiecare situatie, functia va returna tara de fabricatie;
// 5. cazul 'Hyundai' va fi asociat cu variabila country_name (Coreea de Sud);
// 6. dupa switch, functia va returna "Marca " + car_name (brandul masinii introdus 
// in console.log() + " este  fabricata in " + country_name (numele tarii asociat fiecarui
// caz din switch);
// Pentru valoare default am pus initial "Marca nu exista", insa cand am dat console.log()
// pentru a verifica, functia imi returna "Marca Opel este fabricata in 'Marca nu exista!'",
// asa ca am declarat o variabila unknown careia i-am atribuit valoarea "Marca nu exista!";

var car = function (car_name) {
  var country_name;
  var unknown = 'Marca nu exista!';

  switch(car_name) {
    case 'Mazda':
    case 'Nissan':
    case 'Mitsubishi':
      country_name = 'Japonia';
      break;
    case 'Hyundai':
      country_name = 'Coreea de Sud';
      break;
    case 'Bentley':
    case 'Rolls-Royce':
      country_name = 'Regatul Unit';
      break; 
    case 'Alfa-Romeo':
    case 'Pagani':
      country_name = 'Italia';
      break;
    default:
      return unknown;
  } 

  return 'Marca ' + car_name + ' este fabricata in ' + country_name; 
};
  
console.log(car('Mitsubishi'));
console.log(car('Opel'));
console.log(car('Hyundai'));


// 1. declararea functiei IIFE;
// 2. adaugarea var cars;
// 3. fiind vorba despre trei obiecte care fac parte dintr-un array:
// // a. pentru sortarea elementelor dintr-un array, exista metoda .sort(), 
// // astfel: cars.sort();
// // b. accesarea unei valori a unui key dintr-un obiect: console.log(objectName.keyName);
// // cum obiectele nu au un nume, dar trebuie sortate dupa proprietatea salary,
// // am incercat astfel: cars.sort(cars.salary);
// // apoi m-am folosit de o functie de comparare;

// EX. 4

(function () {
  var cars = [
    {name: 'John', salary: 20000},
    {name: 'Danny', salary: 30500},
    {name: 'Bekker', salary: 15000}
  ]
  var sort = cars.sort(function(a,b) {
    return a.salary - b.salary;
  });
  console.log(sort)
}) ()