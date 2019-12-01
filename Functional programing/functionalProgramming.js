// ex 1
const capitalizeNames = arr => arr.map(x => x.toUpperCase());
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

const capitalNames = arr => { // ? 
    const newRes =  arr.map(x => {
        return x[0].toUpperCase() + x.slice(1).toLowerCase();
    });
    return newRes
};
capitalNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// ex 2
const doubleEachNumber = arr => {
   return arr.map(x => {
       if(typeof x === "number"){
           return x * 2;
        } else {
           return x;
        };
   });
};

doubleEachNumber([2, '5', 100, '100', 'blalblala']); 
// [4, “5”, 200, “100”, “blalblala”]

// ex 3

const getPersonsNames = arr => arr.map(x => `${x.name} ${x.surname}`)

getPersonsNames([
    {
    name: 'Angelina',
    surname: 'Jolie',
    age: 80
    },
    {
    name: 'Eric',
    surname: 'Jones',
    age: 27
    },
]);
// ["Angelina Jolie", "Eric Jones"]

// ex 4

const computeExamPass = arr => {
    return arr.map(grd => {
        if (grd.grade > 4) {
            return `${grd.name} ${grd.surname} has passed the exam`;
        } else {
            return `${grd.name} ${grd.surname} has not passed the exam`;
        };
    });
};

computeExamPass([
    {
    name: 'Angelina',
    surname: 'Jolie',
    grade: 7
    },
    {
    name: 'Eric',
    surname: 'Jones',
    grade: 3
    },
]);
// ["Angelina Jolie has passed the exam", "Eric Jones has not passed the exam"]

// ex 5. Implementati functia de mai jos si utilizati rezultatul pentru a afisa elementele intr-o pagina

const getPersonsDomElements = arr => {
    // const newArr = arr.map(inf => `${inf.name} ${inf.surname} ${inf.age}`);
    const personNames = arr.map(person => {
        const selectBody = document.getElementsByTagName('body')[0];
        // selectBody.innerHTML = `<h1>${person.name} ${person.surname}</h1><span><h2>${person.age}</h2></span>`;
        // selectBody.innerHTML = `<h1>${person.name} ${person.surname}</h1><span><h2>${person.age}</h2></span>`;

        const firstLine = document.createElement('div');
        const nameF = document.createElement('h1');
        nameF.style.display = "inline";
        nameF.innerText = `${person.name} ${person.surname} `;
        firstLine.appendChild(nameF);

        const firstSpan = document.createElement('span');
        const ageF = document.createElement('h2');
        firstSpan.style.display = "inline-block"
        ageF.innerText = ` ${person.age}`;
        firstSpan.appendChild(ageF);
        firstLine.appendChild(firstSpan);
        selectBody.appendChild(firstLine);

    });
    return personNames;
}

getPersonsDomElements([
    {
    name: "Angelina",
    surname: "Jolie",
    age: 80
    },
    {
    name: "Eric",
    surname: "Jones",
    age: 27
    },
]);

// ex 6. Loop through the Array and remove all non-active users from the initial Array 

const active = arr => { // ?
    return arr.filter(x => x.active === true);
};

active([{
    name: 'Iggy Turskis',
    active: false
},{
    name: 'Geoff Newell',
    active: true
},{
    name: 'Peter Newnham',
    active: true
},{
    name: 'James Walker',
    active: false
}]);

// ex 7. Convertiti toate distantele in mile - 0.621371 * distance - folosind map
// Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
// Returnati distanta totala - folosind reduce

const distances = arr => {
    let conversion = arr.map(item => item.distance * 0.621371)
                        .filter(item => item < 10000) 
                        .reduce((accumulator, item) => accumulator + item, 0);
    console.log(conversion);
}; 

distances([
    { from: 'New York', to: 'Dhaka', distance: 17654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
]) 

// ex 8. Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 

const releases = arr => {
    return arr.map(idTitle => `${idTitle.id}: ${idTitle.title}`)
}

releases ([
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
]); 
// ["70111470: Die Hard", "654356453: Bad Boys", "65432445: The Chamber", "675465: Fracture"]

// ex 9. Returnati id-urile videourilor care au rating 5.0

const newReleases = objArr => {
    return objArr.filter(item => {
        if(item.rating === 5.0) {
            return item.rating;
        };
    })
    .map(x => x.id);
};

newReleases ([
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
]);

// ex 10. Vreau la final sa am o lista de video ids // ?
const movieLists = arr => {
    let list = arr.map(item => item.videos).flat()
                .map(item => item.id);
    return list;
}

movieLists([
    {
        name: "New Releases",
        videos: [
            {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
            },
            {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
            },
            {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
]);

// ex 11. Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter
const movieLists = hardArr => {
    return hardArr.map(item => {
        return item.videos.map(info => {
            return {
                id: info.id,
                title: info.title,
                boxart: info.boxarts.filter(sizes => {
                    return sizes.width === 150 && sizes.height === 200;
                })
                .map(url => {
                    return url.url
                })
            }
        })
    })
    .flat()
}

movieLists([
    {
        name: "Instant Queue",
        videos : [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
]);

// ex 12. Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

//charCodeAt() = returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//String.fromCharCode() = method returns a string created from the specified sequence of UTF-16 code units.
//.map() = creates a new array with the results of calling a provided function on every element in the calling array.

moveLetters = string => {
    return string.split("").map(word => {
        let char = word.charCodeAt()
        return String.fromCharCode(char + 1)
    }).join("")

}

moveLetters('abcxy')
moveLetters('Hello')

// ex 13. Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"

// .map() = creates a new array with the results of calling a provided function on every element in the calling array.

const changeWordCase = string => {
    let arr = string.split(" ")
    return arr.map(words => {
        let index = arr.indexOf(words)
        if(index % 2 === 0){
            return words.toUpperCase()
        } else {
            return words.toLowerCase()
        }
    }).join(" ")
}

changeWordCase('hey ppl, lets learn javascript together')

// ex 14. Faceti asftel incat toate variabilele de mai jos sa returneze ceea ce zice numele
const arr = [
    {name: 'sasha', sex:'f', age:7, species:'cat'},
    {name: 'john', sex:'m', age:133, species:'human'},
    {name: 'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
];
    
let allCats = arr => {
    return arr.filter(cats => cats.species === "cat")
};

allCats(arr)

let allHumans = arr => {
    return arr.filter(human => human.species === "human")
};

allHumans(arr)


let allFemales = arr => {
    return arr.filter(females => females.sex === "f")
};

allFemales(arr)

let totalOfAllAges = arr => {
    return arr.reduce((accumulator, ages) => accumulator + ages.age, 0)
};

totalOfAllAges(arr)

let averageAgeOfCats = arr => {
    return arr.filter(cats => cats.species === "cat")
    .reduce((accumulator, age) => accumulator + age.age, 0)
};

averageAgeOfCats(arr)

let averageAgeOfHumans = arr => { 
    return arr.filter(human => human.species === "human")
    .reduce((accumulator, age) => accumulator + age.age, 0)
};

averageAgeOfHumans(arr)

let avgLengthOfNames = arr => {
    return arr.map(names => names.name)
    .map(lengthName => lengthName.length)
    .reduce((accumulator, value) => accumulator + value, 0)
};

avgLengthOfNames(arr)

// ex 15. Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor : f1(f2(value))
// ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const square = x => x *= x;
const double = x => x *= 2;

const composedValue = (fn1, fn2, nr) => fn1(fn2(nr));
composedValue(square, double, 5)

// ex 16. Faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//  exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = nr => square(double(nr));
compose(10)

// ex 17. faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul 
// si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const sqrtNr = arr => {
    return arr.filter(nr => nr % 2 === 0)
};

const find = (arr, fn) => fn(arr);

find([1,2,3,4,5], sqrtNr)


const age = arr => {
    return arr.filter(years => years.age > 18)
    .map(name => name.name)
};

const finder = (arr, fn) => fn(arr)

finder([
    {
        name: "Maddie",
        age: 18,
        occupation: "student"
    },
    {
        name: "Turner",
        age: 25,
        occupation: "CEO"
    },
    {
        name: "Andrea",
        age: 20,
        occupation: "seller agent"
    }
], age)