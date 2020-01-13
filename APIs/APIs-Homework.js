// PRE: create separate module to import fetch function(request) in index.js

//EX1
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.

const url = "https://jsonplaceholder.typicode.com/posts";

const myPost = {
  title: "Javascript Post is awesome",
  body: "lorem ipsum etc",
  userId: 1
};

const options = {
  method: "post",
  body: JSON.stringify(myPost),
  headers: { "Content-Type": "application/json" }
};

fetch(url, options)
.then(response => return response.json())
.then(response => console.log(response))
.catch(err => console.log(`Woops: ${err}`));

const request = fetch(url).then(response => response.json());
console.log(request);

//EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()

fetch('https://jsonplaceholder.typicode.com/posts',options)
.then(response => response.json())
.then(error => {
  try {
    throw new Error ('Whoops')
  } 
  catch(error) {
    console.log(error.name, error.message)
  }
  })
.catch(error => console.log(error))

// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
const horror = "https://www.googleapis.com/books/v1/volumes?q=horror";

const gimmeInfos = fetch(horror)
.then(response => response.json())
.then(infos => 
  console.log(
    infos.items
    .filter(pages => pages.volumeInfo.pageCount > 230)
    .filter(authors => authors.volumeInfo.authors.length >= 3)
  )
)

// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const users = "https://jsonplaceholder.typicode.com/users";

const gimmeUsers = fetch(users)
.then(response => response.json())
.then(user => {
  console.log(
    user
    .filter(id => id.id > 5)
    .map(details => {
    return {
      userNames: details.username,
      city: details.address.city
    }
  })
 )
})