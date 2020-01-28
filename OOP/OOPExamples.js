// triunghi.constructor;                 // Triangle(a, b, c)    
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

// crearea de parinte // sablon
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "triunghi"
}

Triangle.prototype = forma;

Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c
}

const triunghi = new Triangle (2, 3, 4);

// console.log(triunghi.constructor); // constructorul 

const forma = {
    type: " ",
    getType: function() {
        return this.type;
    }
}

console.log(forma.isPrototypeOf(triunghi)) // false ===> trebuie intai instantiat
console.log(triunghi.getType())







const Person = function(nameValue, surnameValue, ageValue) {  // constructor // se pot pune valori care sunt statice, care nu se iau in functie de paramaetrii,
// de ex this.placeOfLiving = "Earth" <=> constanta
    // attributes
    this.name = nameValue;
    this.surname = surnameValue;
    this.age = ageValue;
    this.placeOfLiving = "Earth"; // Heaven

    // methods 
    this.showPersonName = function() {
        console.log(`${this.name} ${this.surname}`);
    }
}; //constructor

const MJ = new Person ("Jackson", "Michael", 70) // obiect - apartin clasei Person, dar toate impart aceleasi tipuri de proprietati
// dar cu valori diferite
console.log(MJ); // se afiseaza un obiect de tipul Person (face parte din clasa Person), iar ca instanta din clasa Person are
// proprietati
MJ.showPersonName(); // => string

const PersonWithSuperpowers = function(nameValue, surnameValue, ageValue) { // another constructor
    //.call ()
    Person.call(this, nameValue, surnameValue, ageValue); // apelarea constructorului de mai sus

    this.superpowers = [];

    this.addSuperpower = function (superpower) { // metoda
        this.superpowers.push(superpower);
    }
} // e doar o clasa, nu extinde in prima faza

PersonWithSuperpowers.prototype = new Person(); // adaug clasa Person + PersonWithSuperpowers // pass the methods // MOSTENIREA

const aPersonWithSuperpower = new PersonWithSuperpowers("Grigoras", "Ovidiu", 18); // in prima faza le transpune in
// PersonWithSuperpowers apoi le duce in Person (fn .call()) // 
console.log(aPersonWithSuperpower) 
//age, name, placeofliving, surname = clasa initial creata extinsa cu superpower si addsuperpower

aPersonWithSuperpower.addSuperpower("invisibility")

console.log(aPersonWithSuperpower)

aPersonWithSuperpower.showPersonName()

