const form = document.getElementById('form');
const fullName = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const mesBox = document.getElementById('messageBox');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput(); // checks to make sure each field has required data
});

const setError = (element, message) => {
    const inputControl = element.parentElement; // Parent element is .formGroup
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message; // Display error message
    inputControl.classList.add('error'); // Add 'error' class
    inputControl.classList.remove('success'); // Remove 'success' class
};

const setSuccess = element => {
    const inputControl = element.parentElement; // Parent element is .formGroup
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''; // Clear any error message
    inputControl.classList.add('success'); // Add 'success' class
    inputControl.classList.remove('error'); // Remove 'error' class
};


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInput = () => {
    const nameValue = fullName.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const mesBoxValue = mesBox.value.trim();

    if (nameValue === '') {
        setError(fullName, 'Name is required');
        console.log("name fail")
    } else {
        setSuccess(fullName);
        console.log("Name success");
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required.');
    } else {
        setSuccess(phone);
    }

    if (emailValue === '') {
        setError(email, 'Email is required.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email.');
    } else {
        setSuccess(email);
    }

    if (mesBoxValue === '') {
        setError(mesBox, 'Message is required.');
    } else {
        setSuccess(mesBox);
    }
};
