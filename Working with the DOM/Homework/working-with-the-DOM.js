// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". 
// Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net.
// Puneti acest element(append) la pagina noastra

const bodyStyle = document.querySelector('body');
bodyStyle.style.fontFamily = 'Arial,sans-serif';

const name = document.getElementById('name').textContent = "Craciun Bianca";
const favouriteDrink = document.getElementById('fav-drink').textContent = "Coffee addicted";
const bornPlace = document.getElementById('born-place').textContent = "Pascani, Iasi";

const newClass1 = document.getElementById('name').classList.add('listitem')
const newClass2 = document.getElementById('fav-drink').classList.add('listitem');
const newClass3 = document.getElementById('born-place').classList.add('listitem');

// Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// aici nu cred ca am facut bine

const style = document.createElement('style');
style.innerText = '.listitem { color: red; }';
const insertNode = document.getElementsByTagName('head')[0].appendChild(style);

const img = document.createElement('img');
const attr = img.src = "coffeeAddicted.jpg";
const append = document.getElementsByTagName('body')[0].appendChild(img);
