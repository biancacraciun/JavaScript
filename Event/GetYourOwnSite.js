const username = document.getElementById('usernameVal'); // userName Input

const charLimitInfo = () => {
    const charLimit = document.getElementById('charactersLimit');
    charLimit.innerText = "(Must be at least 4 characters, letters and numbers only.)";
    username.style.backgroundColor = "#F8F8F8"; 
};

username.onclick = charLimitInfo;

const email = document.getElementById('email'); // email Input
const emailInfo = () => {
    const emailAddress = document.getElementById('emailAddress');
    emailAddress.innerText = "We send your registration email to this address. (Double check your email address before continuing.)";
    email.style.backgroundColor = "#F8F8F8";
};

email.onclick = emailInfo;

const fName = document.getElementById('fName'); // firstname Input

const fNameInfo = () => {
    const firstName = document.getElementById('firstName');
    firstName.innerText = "(Must be input.)";
    fName.style.backgroundColor = "#F8F8F8";
};

fName.onclick = fNameInfo;

const lName = document.getElementById('lName'); // lastname Input

const lNameInfo = () => {
    const lastName = document.getElementById('lastName');
    lastName.innerText = "(Must be input.)";
    lName.style.backgroundColor = "#F8F8F8";
};

lName.onclick = lNameInfo;

const nickName = document.getElementById('nickname'); // nickname Input

const nickNameStyle = () => {
    nickName.style.backgroundColor = "#F8F8F8";
};

nickName.onclick = nickNameStyle;

const phoneNr = document.getElementById('telNumber'); // phone Input

const phoneNrInfo = () => {
    const phoneConditions = document.getElementById('phoneConditions');
    phoneConditions.innerText = "(Must be at least 10 characters, numbers only.)";
    phoneNr.style.backgroundColor = "#F8F8F8";
};

phoneNr.onclick = phoneNrInfo;

const validate = event => {
    const usernameVal = username.value; // username Input value 
    const usernameValidation = new RegExp (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/);
    if(usernameVal === "" || usernameVal.length !== 4 && !(usernameVal.match(usernameValidation))) {
        event.preventDefault();
        const userNameError = document.getElementById('userName-Error');
        userNameError.style.border = "1px solid red";
        userNameError.style.backgroundColor = "#ffece6";
        userNameError.style.padding = "5px";
        userNameError.style.margin = "10px 0px";
        return userNameError.innerText = "Please enter a username!";
    }

    const emailVal = email.value;
    const emailValidation = new RegExp (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(emailVal === "" || !(emailVal.match(emailValidation))) {
        event.preventDefault();
        const emailError = document.getElementById('email-Error');
        emailError.style.border = "1px solid red";
        emailError.style.backgroundColor = "#ffece6";
        emailError.style.padding = "5px";
        emailError.style.margin = "10px 0px";
        return emailError.innerText = "Please enter a valid email address!";
    }

    const firstNameVal = fName.value;
    if(firstNameVal === "") {
        event.preventDefault();
        const firstNameError = document.getElementById('firstName-Error');
        firstNameError.style.border = "1px solid red";
        firstNameError.style.backgroundColor = "#ffece6";
        firstNameError.style.padding = "5px";
        firstNameError.style.margin = "10px 0px";
        return firstNameError.innerText = "Please enter a First Name!"
    }

    const lastNameVal = lName.value;
    if(lastNameVal === "") {
        event.preventDefault();
        const lastNameError = document.getElementById('lastName-Error');
        lastNameError.style.border = "1px solid red";
        lastNameError.style.backgroundColor = "#ffece6";
        lastNameError.style.padding = "5px";
        lastNameError.style.margin = "10px 0px";
        return lastNameError.innerText = "Please enter a Last Name!"
    }

    const phoneNrVal = phoneNr.value;
    const phoneValidation = new RegExp (/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/);
    if(phoneNrVal === "" || !(phoneValidation.test(phoneNrVal))) {
        event.preventDefault();
        const phoneError = document.getElementById('phone-Error');
        phoneError.style.border = "1px solid red";
        phoneError.style.backgroundColor = "#ffece6";
        phoneError.style.padding = "5px";
        phoneError.style.margin = "10px 0px";
        return phoneError.innerText = "Please enter a Phone!";
    }
}

const form = document.getElementById('thisForm');
form.addEventListener('submit', validate);