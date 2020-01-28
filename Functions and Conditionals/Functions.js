//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
function multiplyByTen(number) {

  var result = number * 10;
  return result;
}

multiplyByTen(6);

//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
function myNameIs(name) {

  var result = "My name is" + " " + name;
  return result;
}

myNameIs("Bianca");

//Ex3 
//Scrieti o functie care sa transforme un numar in string.
function transformString(a) {

  var result = a.toString();
  return result;
}

transformString(5);

//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
function squareNumber(a) {

  var result = a*=a;
  return result;
}

squareNumber(2);

//Ex5
//Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
//Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
function aflaViitorul(years, compName, money, jobName) {

  var result = "Eu voi fi in " + years + " ani " + jobName + " la compania " + compName + " si voi face " + money + " bani pe ora."
  return result;
}

aflaViitorul(2, 'X', 'Y', "z");


//Ex6
//Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
// functia are 1 singur parametru - deci va accepta 1 singur argument.
// Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
function catYearsOld(cat, me) {

return (cat * 7) / me;
}

catYearsOld(5, 22);


//BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.

//Ex7
// Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
// Functia accepta ca parametrii years si coffePerDay.
// Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
function coffeeLovers(years, coffeePerDay) {
  return "In urmatorii " + years + " ani voi bea in total " + coffeePerDay + " cani de cafea";
}

coffeeLovers("X", "Y");

//EX8 BONUS 
// Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
// rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
// folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.
function calculateCelsiusToFarenheit(farenheit) {
  return (farenheit - 32) * 5/9;
}

calculateCelsiusToFarenheit(60);

function calculateFarenheitToCelsius(celsius) {
  return (celsius * 9/5 + 32);
}

calculateFarenheitToCelsius(2);
