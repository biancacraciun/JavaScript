// 1. se declara functia validate_Gender cu parametrul SSN;
// 2. valoarea numerica a parametrului SSN se transforma in string (SSN_string);
// Incercasem fara sa transform in string, dar cum charAt() e specific string-urilor,
// am transformat.
// // // Introducerea validarii pentru 13 cifre: Daca lungimea string-ului nu este de 13 cifre,
// // // functia va returna 'Incorrect SSN!';
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
  var regexp = /^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$/;
  
  if (!regexp.test(SSN)) {
    return 'Incorrect SSN!';
  } 

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
  
validate_Gender(2970220225899)

function validate_Gender (SSN) {

  var gender;
  var SSN_string = SSN.toString();
  var regexp = /^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$/;

  if (!regexp.test(SSN)) {
    return 'Incorrect SSN!';
  } 
  
  switch (true) {
    case SSN_string.charAt(0) === '1':
      gender = 'M';
      break;
    case SSN_string.charAt(0) === '2':
      gender = 'F';
      break;
    case SSN_string.charAt(0) === '3':
      gender = 'M';
      break;
    case SSN_string.charAt(0) === '4':
      gender = 'F';
      break;
    case SSN_string.charAt(0) === '5':
      gender = 'M';
      break;
    case SSN_string.charAt(0) === '6':
      gender = 'F';
      break;
    case SSN_string.charAt(0) === '7' && SSN_string.charAt(0) === '8':
      return 'Persoana este rezidenta straina!'
      break;
  }

  return 'Persoana verificata este de sexul ' + gender;
};

validate_Gender(2970220225899);
 
// 1. se declara functia cu parametrul nr;
// 2. se declara o variabila care stocheaza calificativele corespunzatoare punctajelor;
// 3. pentru fiecare interval numeric, variabila corespunzatoare calificativul ia o alta valoare;
// 4. daca parametrul nr face parte din intervalul [1, 3), variabila qualif va lua valoarea 'E';
// 5. altfel daca parametrul nr face parte din intervalul [3,6], variabila qualif va lua valoarea 'D';
// 6. altfel daca parametrul nr face parte din intervalul [7,8], variabila qualif va lua valoare 'B';
// 7. altfel daca parametrul nr este egal cu 9, variabila qualif va lua valoarea A;
// 8. altfel daca parametrul nr este egal cu 10, variabila qualif va lua A+;
// 9. in alte conditii, functia va returna undefined.
// 10. functia pincipala returneaza 'Calificativul corespunzator punctajului ' + parametrul nr + 
// + ' este ' + var qualif;

// EX. 2
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

  return 'Calificativul corespunzator punctajului ' + nr + ' este ' + qualif + '.';
};

note(5)

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

  return 'Calificativul corespunzator punctajului ' + nr + ' este ' + qualif + '.';
};

note(5)


// 1. se declara functia cu parametrul car_name;
// 2. se declara o variabila care va stoca numele tarilor de fabricatie;
// 3. pentru fiecare brand auto variabila country_name va prelua o valoare;
// 4. daca marca masinii este Mazda, var country_name va avea valoarea 'Japonia';
// 5. daca marca masinii este Hyundai, var country_name va avea valoarea 'Coreea de Sud'; 
// 7. in cazul in care marca introdusa nu face parte dintre cele precizate in
// functie, aceasta va returna "Marca este necunoscuta!";

// EX. 3

var car_product = function (car_name) {

  var country_name;
  if (car_name === 'Mazda') {
      country_name = 'Japonia';
  } else if (car_name === 'Hyundai') {
      country_name = 'Coreea de Sud';
  } else if (car_name === 'Bentley') {
      country_name = 'Regatul Unit';
  } else if (car_name === 'Rolls-Royce') {
      country_name = 'Regatul Unit';
  } else if (car_name === 'Alfa-Romeo') {
      country_name = 'Italia';
  } else if (car_name === 'Pagani') {
      country_name = 'Italia';
  } else if (car_name === 'Mitsubishi') {
      country_name = 'Japonia';
  } else if (car_name === 'Nissan') {
      country_name = 'Japonia';
  } else {
      return 'Marca este necunoscuta.';
  }

  return 'Marca ' + car_name +  ' este fabricata in ' + country_name + '.';
};

car_product('Mazda');


// 1. se declara functia cu parametrul car_name;
// 2. se declara o variabila (country_name) care va stoca numele tarilor;
// 3. folosesc switch(car_name);
// 4. pentru fiecare case, variabila country_name va lua o valoare;
// 5. cazul 'Hyundai' va fi asociat cu variabila country_name (Coreea de Sud);
// 6. dupa switch, functia va returna "Marca " + car_name (parametrul functiei) + " este  fabricata in " 
// + country_name (numele tarii asociat fiecarui caz din switch);
// Pentru valoare default am pus initial "Marca nu exista", insa cand am dat console.log()
// pentru a verifica, functia imi returna "Marca Opel este fabricata in 'Marca nu exista!'",
// asa ca am declarat o variabila unknown careia i-am atribuit valoarea "Marca nu exista!";

var car = function (car_name) {

  var country_name;
  var unknown = 'Marca este necunoscuta!';

  switch(car_name) {
    case 'Mazda':
      country_name = 'Japonia';
      break;
    case 'Nissan':
      country_name = 'Japonia';
      break;
    case 'Mitsubishi':
      country_name = 'Japonia';
      break;
    case 'Hyundai':
      country_name = 'Coreea de Sud';
      break;
    case 'Bentley':
      country_name = 'Regatul Unit';
      break;
    case 'Rolls-Royce':
      country_name = 'Regatul Unit';
      break; 
    case 'Alfa-Romeo':
      country_name = 'Italia';
      break;
    case 'Pagani':
      country_name = 'Italia';
      break;
    default:
      return unknown;
  } 

  return 'Marca ' + car_name + ' este fabricata in ' + country_name; 
};
  
car('Mitsubishi');
car('Opel');
car('Hyundai');


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