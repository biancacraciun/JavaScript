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

const verifyErrors = (selectedElement, text) => {

    event.preventDefault();
    const selectedDiv = document.getElementById(selectedElement);
    selectedDiv.style.border = "1px solid red";
    selectedDiv.style.backgroundColor = "#ffece6";
    selectedDiv.style.padding = "5px";
    selectedDiv.style.margin = "10px 0px";

    return selectedDiv.innerText = text;
}

const getFocus = nextInput => { 
    const selectNextInput = document.getElementById(nextInput);
    return selectNextInput.focus()
}

const validate = event => {
    const usernameVal = username.value; // username Input value 
    const usernameValidation = new RegExp (/^[a-zA-Z0-9_]{4}$/g);
    if(usernameVal === "" || usernameVal.length !== 4 && !(usernameVal.match(usernameValidation))) {
        verifyErrors('userName-Error', 'Please enter a valid UserName!')
    }

    if(usernameVal.length === 4 && usernameVal.match(usernameValidation)) {
        getFocus('email')
    }

    const emailVal = email.value;
    const emailValidation = new RegExp (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(emailVal === "" || !(emailVal.match(emailValidation))) {
        verifyErrors('email-Error', 'Please enter a valid email address!')
       
    }

    if(emailVal.match(emailValidation)) {
        getFocus('fName')
    }

    const firstNameVal = fName.value;
    if(firstNameVal === "") {
        verifyErrors('firstName-Error', 'Please enter a First Name!')
    }

    if(firstNameVal !== "") {
        getFocus('lName')
    }

    const lastNameVal = lName.value;
    if(lastNameVal === "") {
        verifyErrors('lastName-Error', 'Please enter a Last Name!')
    }

    if(lastNameVal !== "") {
        getFocus('telNumber')
    }

    const phoneNrVal = phoneNr.value;
    const phoneValidation = new RegExp (/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/);
    if(phoneNrVal === "" || !(phoneValidation.test(phoneNrVal))) {
        verifyErrors('phone-Error', 'Please enter a valid Phone Number!')
    }
}

const form = document.getElementById('thisForm');
form.addEventListener('submit', validate);