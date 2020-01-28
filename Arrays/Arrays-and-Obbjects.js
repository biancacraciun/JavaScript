//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var array = ["work", "hard", "for", "success", "now"];
console.log(array.length);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];

var merge = [...array1, ...array2];

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var firstTry = ["array", "is", "array"];
var secondTry = "array is array"; 

Array.isArray(firstTry); // true;
Array.isArray(secondTry); // false;

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos.
// Trebuie sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];

var nrStr = numbers.join(" and ");

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];

cars.push("Volvo");
cars.push("Mazda");

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
cars.pop();

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
cars.unshift("Dodge");

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse();

//Ex9: Avand in vedere rezultatul anterior, folositi o metoda pe arrayuri care sa inlocuiasca 
// incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi;
cars.splice(2, 2, "Mercedes", "Honda")
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];

var sortedArr = arrayNumbers.sort(function (a, b) { return a - b })
sortedArr.reverse()

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Beer", "Kiwi"]
fruitsArray.sort()

//OBJECT
// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
car = {
  name: 'Tesla',
  wheels: 4, 
};

car.name = 'Mercedes';
delete car.name;
console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var book = {
  title: 'The Name of The Rose',
  author: 'Umberto Eco',
  publishingHouse: 'Nemira',
  apparition: 1980,
};

var keys = Object.keys(book);
var transform1 = keys.join(', ').toUpperCase();
var array = transform1.split();
var transform2 = array.join(', ').toLowerCase();
var arrayAgain = transform2.split();
var final = Object.values(book) + " reprezinta ceva";
console.log(final)

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
kids = {
  name: 'Lucas',
  age: 3, 
  abilities: function () {
    console.log(this.name + " " + this.age + " years");
  }
};

console.log(kids);
kids.abilities();

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocati-l intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
  rooms: 3,
  zone: "Bucium",
  animals: 1
};

sport = {
  type: 'running',
  surface: 'sidewalk',
  minDistance: 10,
  time: 60,
};

var copy = Object.assign({}, sport);
copy.season = 'spring/summer';
copy.eating = 'carbs';
console.log(copy)

merge = {...myHouse, ...copy};
console.log(merge);

// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

family = {
  member_1: {name: 'David', age: 18},
}

console.log(family.member_1.name);
console.log(family.member_1.age);
var details = Object.keys(family.member_1);
console.log(details);
console.log(details.join(' si ') + " apartin obiectului member_1.");

//Ex6
// Avem obiectul : 
myObject = {
name: "John",
surname: "Applegate",
};

//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var array = Object.values(myObject).sort();
console.log(array);

//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformati-le in litere mari.
function Sport(types, shoesModel, injury) {
  this.types = types;
  this.shoesModel = shoesModel;
  this.injury = injury;
}

var activeLife = new Sport('running', 'Nike Epic React Flyknit', 'shoulder');
activeLife.types = activeLife.types.toUpperCase();
activeLife.shoesModel = activeLife.shoesModel.toUpperCase();
activeLife.injury = activeLife.types.toUpperCase();

console.log(activeLife);