const firstName = document.forms['newForm']['fName'];
const lastName = document.forms['newForm']['lName'];
const emailAddress = document.forms['newForm']['emailId'];
const password = document.forms['newForm']['password'];
const form = document.getElementById('newForm');
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;

function submitValidation() {
    /* To check for empty and non matching fields in inputs */
    if((firstName.value === '') || (firstName.value === null)) {
        let warningTag = document.createElement('p');
        let warningText = document.createTextNode('First Name cannot be empty');
        /* So that error text doesn't come twice after submit*/
        if((document.querySelector("#newForm > p.warnText.fName")) === null){
            warningTag.appendChild(warningText);
            form.insertBefore(warningTag, lastName);
            firstName.classList.add('error');
            warningTag.classList.add('warnText', 'fName');
        }
        noPlaceholder(firstName);
    }
    /* So that error text and style is removed after user enters valid input */
    else {
        firstName.classList.remove('error');
        document.querySelector("#newForm > p.warnText.fName").remove()
    }
    if((lastName.value === '') || (lastName.value === null)) {
        let warningTag = document.createElement('p');
        /* So that error text doesn't come twice after submit*/
        if((document.querySelector('#newForm > p.warnText.lName')) === null ) {
            let warningText = document.createTextNode('Last Name cannot be empty');
            warningTag.appendChild(warningText);
            form.insertBefore(warningTag, emailAddress);
            lastName.classList.add('error');
            warningTag.classList.add('warnText','lName');
        }
        noPlaceholder(lastName);
    }
    /* So that error text and style is removed after user enters valid input */
    else {
        lastName.classList.remove('error');
        document.querySelector('#newForm > p.warnText.lName').remove();
    }
    if((emailAddress.value === '') || (emailAddress.value === null)) {
        let warningTag = document.createElement('p');
        let warningText = document.createTextNode('Email Address cannot be empty');
        /* So that error text doesn't come twice after submit*/
        if((document.querySelector('#newForm > p.warnText.emailId')) === null ) {
            warningTag.appendChild(warningText);
            form.insertBefore(warningTag, password);
            emailAddress.classList.add('error');
            warningTag.classList.add('warnText', 'emailId');
        }
        noPlaceholder(emailAddress);
    }
    else if(emailAddress.value.match(regEx)) {
        emailAddress.classList.remove('error');
        document.querySelector('#newForm > p.warnText.emailId').remove();
    }
    /* So that error text and style is removed after user enters valid input */
    else {
        let warningTag = document.createElement('p');
        let warningText = document.createTextNode('Looks like this is not an email');
        warningTag.appendChild(warningText);
        warningTag.classList.add('warnText', 'emailId');
        document.querySelector('#newForm > p.warnText.emailId').replaceWith(warningTag);
    }
    if((password.value === '') || (password.value === null)) {
        let warningTag = document.createElement('p');
        /* So that error text doesn't come twice after submit*/
        if((document.querySelector('#newForm > p.warnText.password')) === null ) {
            let warningText = document.createTextNode('Password cannot be empty');
            warningTag.appendChild(warningText);
            form.insertBefore(warningTag , document.forms['newForm']['submitBtn'])
            password.classList.add('error');
            warningTag.classList.add('warnText', 'password');
        }
        noPlaceholder(password);
    }
    /* So that error text and style is removed after user enters valid input */
    else {
        password.classList.remove('error');
        document.querySelector('#newForm > p.warnText.password').remove();
    }
}

function noPlaceholder(prop) {
    return prop.placeholder = '';
}