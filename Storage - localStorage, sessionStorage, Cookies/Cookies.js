//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

const nameCookie = () => {
    const myName = document.cookie = "name = Bianca";
    const array = myName.split(' ');
    const cookieInfos = array.slice(array.indexOf(""), array.length).join();
    // console.log(cookieInfos)
    return cookieInfos;
}

nameCookie()

const professionCookie = () => {
    const profession = document.cookie = "profession = teacher";
    const array = profession.split(" ")
    const professionName = array.pop()
    // console.log(professionName)
    return professionName;
}

professionCookie()

const ageCookie = () => {
    const cookie = document.cookie = "age = 22";
    const ageArray = cookie.split(" ")
    const myAge = ageArray.slice(ageArray.indexOf(""), ageArray.length).join()
    // console.log(myAge)
    return myAge;
}
  
ageCookie()

const student = () => {
    const actualTime = new Date(Date.now() + 86400000)
    const expire = actualTime.toUTCString()
    const study = document.cookie = "Faculty = Psychology and Education Science; expires = " + expire;
    console.log(study)
}
  
student()

const runningCookie = (cookieName, cookieValue, days) => {
    let date = new Date();
    date.setTime(date.getTime() + days*20*60*60*1000)
    const expire = `; expires = ${date.toUTCString()}`
    let myCookie = document.cookie = `${cookieName} = ${cookieValue} ${expire}`;
    console.log(myCookie)
}

runningCookie("rungry [ruhng-gree] ADJECTIVE", "when you are so hungry from your long run that you must eat. all. the. things.", 15)
  

//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

const width = localStorage.setItem("width", "100px");
const height = localStorage.setItem("height", "100px");
const background = localStorage.setItem("background-color", "green");

const getWidth = localStorage.getItem('width');
console.log(getWidth)

const getHeight = localStorage.getItem('height');
console.log(getHeight)

const backgroundColor = localStorage.getItem('background-color');
console.log(backgroundColor)

const body = document.getElementsByTagName('body')[0];
const square = document.createElement('div');
body.appendChild(square);

square.style.width = getWidth;
square.style.border = "3px solid black"
square.style.height = getHeight;
square.style.backgroundColor = backgroundColor;

function setCookie (cookieName, cookieValue, daysToExpire) {

    const date = new Date();
    date.setTime(date.getTime() + (24*60*60*1000*daysToExpire))
    console.log(document.cookie = `${cookieName} = ${cookieValue}; expires = ${date.toGMTString()}`)
}

setCookie ("name", "Bianca", 25)

function getCookie (cookieName){
    // const cookieResult = decodeURIComponent(document.cookie).split(';');
    // ...
}

function verifiyCookie(){
    // verify cookie
    // use prompt messages 
    // if cookie doesnt exist use prompt to show message "Hello, please insert your name"
    // if cookie exist show message "Hello {name}"
}