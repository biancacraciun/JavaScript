// 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

let number = nr => {

    let promise = new Promise((resolve, reject) => {
        if(nr > 10) {
            resolve("Done!!")
        } else {
            reject("Enter another number!")
        }
    })
    return promise;
};

number(10).then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))

// 2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

let testString = string => {

    let promise = new Promise((resolve, reject) => {
        if(string.includes("promise")) {
            resolve("Yep Promise")
        } else {
            reject("Not Promise")
        }
    })
    return promise;
}

testString("Hello! Lesson title: promise Practice").then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))

let acceptString = string => {

    let strArray = string.toLowerCase().split(" ");

    let promise = new Promise((resolve, reject) => {
        if(!(strArray.indexOf("promise") === -1)) {
            resolve("Yep Promise!")
        } else {
            reject("Not Promise!")
        }
    })
    return promise;
}

acceptString("Hello! Lesson title: Promise Practice").then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))
acceptString("Hello! Lesson title: promise Practice").then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))

// 3. Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

let acceptOneParam = parameter => {

    let promise = new Promise ((resolve, reject) => {
        setTimeout( () => {
            if(typeof parameter === "string") {
                resolve(parameter.toUpperCase())
            } else {
                reject(parameter)
            }
        }, 500)
    })
    return promise;
}

acceptOneParam('student').then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))
acceptOneParam(124).then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))

// 4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

let capitalizeWords = array => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(array)) {
            if (array.every(elem => typeof elem === 'string')) {
                resolve(array.map(x => x.toUpperCase()))
            } else {
                reject("Try again!");
            }
        } else {
            "Try again"
        }
    })
}

let sortWords = returnedArr => {
    return new Promise ((resolve, reject) => {
        resolve(returnedArr.sort())
        reject("Try again!")
    })
}

capitalizeWords(["student", "end", "work"])
// .then(result => console.log(result), error => console.log(error))
.then(sortWords)
.then(result => console.log(result), error => console.log(error))
.catch(err => console.log(err))

// Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la aleger
// (cel putin 3)

const url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

const API = fetch(url).then(response => {
    return response.json()
})
.then(resolve => console.log(resolve), error => console.log(error))
.catch(err => console.log(err))
