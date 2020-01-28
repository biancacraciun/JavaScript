function Book (title, author, cap, pag) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookCaps = cap;
    this.bookPags = pag;
};

let firstBook = new Book ("The Name of The Rose", "Umberto Eco", 25, 500);

console.log(firstBook)

// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle = function(driver) { // constructor // concept de baza
    this.driver = driver; // aceeasi pt ambele vehicule
    this.speed = 0; // aceeasi pt ambele vehicule
    this.drive = function(mph) { // aceeasi pt ambele vehicule
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
};

var Car = function(driver) { // nu are nimic in plus, dar este un mode de vehicul
    this.prototype = new Vehicle(driver); // 
} 
// Car.prototype = new Vehicle() // nu se poate pasa argumentul driver => pt ca scopul este local, motiv pt care se muta
// in interiorul functiei si trebuie folosit this pt ca suntem in obiect

var Truck = function(driver) {
    this.prototype = new Vehicle(driver)
    // this.driver = driver;
    this.cargo = [];

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
    this.prototype = new Vehicle(driver)
};

Truck.prototype = new Vehicle();

const newTruck = new Truck("Ovidiu");
const newCar =  new Car("Lucian")
console.log(newTruck)

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

const Trainer = function (subject) {
    this.prototype = new Person ();

    this.subject = subject;
    this.teach = function (subject) {
        console.log(`${this.name} is now teaching ${this.subject}`);
    }
}

Trainer.prototype = new Person ();

const lucian = new Trainer("js");
console.log(lucian)
lucian.initialize("Lucian", 34)
lucian.teach()



