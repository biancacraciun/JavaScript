//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.

var str = "Daca te simti bine, nu te ingrijora, trece!";
var strPosition = str.indexOf("trece");
console.log(strPosition);

var strPosition1 = str.indexOf("javascript");
console.log(strPosition1);

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.

var fruits = "Apple, Lemon, Plum, Kiwi";
console.log(fruits.length);

var result = fruits.slice(20, 24);
console.log(result);

var result2 = fruits.slice(-4);
console.log(result2);

var allFruits = fruits.slice(7);
console.log(allFruits);
  
// Ex 3: Returnati stringul 'Plum' folosind metoda substr()

var moreFruits = "Apple, Lemon, Plum, Kiwi";
var result = moreFruits.substr(14, 4);
console.log(result);

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.

var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
var replace = replaceName.replace("Mia Kalifa", "Bianca");
console.log(replace);

var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
var replace1 = bonusName.replace("Sasha", "Bianca").replace("Sasha", "Bianca");
console.log(replace1);
   
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
var upperCase = text.toUpperCase();
console.log(upperCase);

var lowerCase = text.toLowerCase();
console.log(lowerCase);
   
// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)

var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";
var finalString = text1.concat(" ", text2).concat(" ", text3).concat(" ", text4);
console.log(finalString);

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
  
var word = "Mamaliga";
var position = word.charAt(6);
console.log(position);

var number = word.charCodeAt(6);
console.log(number);

var returnString = word[6];
console.log(returnString);
 
// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
  
var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
var result = cars.split('|');
console.log(result);
  
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
  
var firstWord = 'Nu exista';
var secondWord = 'raspunsuri proaste';
var result = secondWord.replace('raspunsuri', 'intrebari');
var result2 = firstWord.concat(' ', result);
var resultWithUpper = result2.toUpperCase();
console.log(resultWithUpper);