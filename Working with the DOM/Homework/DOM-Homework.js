const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false
}];

// I
// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra:

// Am comentat codul pentru ca am folosit acelasi fisier html:

// const addH = document.createElement('h1');
// const addText = addH.innerText = "Book List";
// document.body.appendChild(addH);

// const firstP = document.createElement('p');
// const firstBook = firstP.innerText = books[0].title + " scrisa de " + books[0].author;
// document.body.appendChild(firstP);
// const secondP = document.createElement('p');
// const secondBook = secondP.innerText = books[1].title + " scrisa de " + books[1].author;
// document.body.appendChild(secondP);

// II 
const addH = document.createElement('h1');
const addText = addH.innerText = "Book List";
document.body.appendChild(addH);

// BONUS: folositi ul si li pentru a face display la carti
const ulList = document.createElement('ul');
const firstLi = document.createElement('li');
const firstBook = firstLi.innerText = books[0].title + " scrisa de " + books[0].author;
ulList.appendChild(firstLi);
const secondLi = document.createElement('li');
const secondBook = secondLi.innerText = books[1].title + " scrisa de " + books[1].author;
ulList.appendChild(secondLi);
document.getElementsByTagName('body')[0].appendChild(ulList)

// BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si adaugati un element img
// pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza):
books[0].cover = "http://theinfinitecurve.files.wordpress.com/2013/03/img_1409.jpg";
books[1].cover = "https://pbs.twimg.com/media/DkYr3D0W4AEZLeu.jpg";

const img1 = document.createElement('img');
img1.src = books[0].cover;
document.getElementsByTagName('ul')[0].appendChild(img1);
const img2 = document.createElement('img');
img2.src = books[1].cover;
document.getElementsByTagName('ul')[0].appendChild(img2);
