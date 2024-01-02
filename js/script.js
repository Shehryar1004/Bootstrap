console.log("Testing the git push command")

const _name = document.getElementById('name');
const email = document.getElementById('email');
const organization = document.getElementById('organization');
const message = document.getElementById('message');
const terms = document.getElementById('terms');
const form = document.getElementById('form')

const nameError = document.getElementById("name-error")
const emailError = document.getElementById("email-error")
const organizationError = document.getElementById("organization-error")
const messageError = document.getElementById("message-error")
const termsError = document.getElementById("terms-error")

_name.addEventListener("input", e => {
    const check = checkName(_name.value);
    if(check !== true){
        nameError.innerText = check;
        return;
    }

    nameError.innerText = "";
})

email.addEventListener("input", e => {
    const check = checkEmail(email.value);
    if(check !== true){
        emailError.innerText = check;
        return;
    }

    emailError.innerText = "";
})

organization.addEventListener("input", e => {
    const check = checkOrganization(organization.value);
    if(check !== true){
        organizationError.innerText = check;
        return;
    }

    organizationError.innerText = "";
})

message.addEventListener("input", e => {
    const check = checkMessage(message.value);
    if(check !== true){
        messageError.innerText = check;
        return;
    }

    messageError.innerText = "";
})

terms.addEventListener("input", e => {
    const check = checkTerms(terms.checked);
    if(check !== true){
        termsError.innerText = check;
        return;
    }

    termsError.innerText = "";
})

function validate(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const organization = document.getElementById('organization').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;
    const form = document.getElementById('form')

    const nameCheck = checkName(name);
    if (nameCheck !== true){
        alert(nameCheck)
        return
    }

    const emailCheck = checkEmail(email);
    if (emailCheck !== true){
        alert(emailCheck)
        return
    }

    const organizationCheck = checkOrganization(organization);
    if (organizationCheck !== true){
        alert(organizationCheck)
        return
    }

    const messageCheck = checkMessage(message);
    if (messageCheck !== true){
        alert(messageCheck)
        return
    }

    const termsCheck = checkTerms(terms);
    if (termsCheck !== true){
        alert(termsCheck)
        return
    }

    alert('Form submitted successfully!')
    form.reset()
}

function checkName(name) {
    if (
        !(/^[a-zA-Z\s]+$/.test(name)) //regex to see if only contains letters and spaces
    ) {
        return "Name must only contain letter and spaces";
    }
    
    if (
        !name ||
        name.length < 6 ||
        name.length > 20 
    ) {
        return "Name must be between 6 to 20 characters";
    }

    return true;
}

function checkEmail(email) {
    if (
        !(/^[^@]+@[^@.]+\.[^@.]+$/.test(email)) //regex to see if email is valid
    ) {
        return "Invalid Email";
    }

    return true;
}

function checkOrganization(organization) {
    if (
        !organization ||
        organization.length < 15
    ) {
        return "Organization name must be greater than 15 characters";
    }

    return true;
}

function checkMessage(message) {
    if (
        !message ||
        message.length < 50
    ) {
        return "Message must be greater than 50 characters";
    }

    return true;
}

function checkTerms(terms) {
    if (!terms) {
        return "Terms must be checked";
    }

    return true;
}
