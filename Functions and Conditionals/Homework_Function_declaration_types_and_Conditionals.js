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