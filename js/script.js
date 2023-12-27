console.log("Testing the git push command")

function validate(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const organization = document.getElementById('organization').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;
    const form = document.getElementById('form')

    if (!checkName(name))
        return;

    if (!checkEmail(email))
        return;

    if (!checkOrganization(organization))
        return;

    if (!checkMessage(message))
        return;

    if (!checkTerms(terms))
        return;

    alert('Form submitted successfully!')
    form.reset()
}

function checkName(name) {
    if (
        !name ||
        name.length < 6 ||
        name.length > 20 
    ) {
        alert("Name must be between 6 to 20 characters");
        return false;
    }

    if (
        !(/^[a-zA-Z\s]+$/.test(name)) //regex to see if only contains letters and spaces
    ) {
        alert("Name must only contain letter and spaces");
        return false;
    }

    return true;
}

function checkEmail(email) {
    if (
        !(/^[^@]+@[^@.]+\.[^@.]+$/.test(email)) //regex to see if email is valid
    ) {
        alert("Invalid Email");
        return false;
    }

    return true;
}

function checkOrganization(organization) {
    if (
        !organization ||
        organization.length < 15
    ) {
        alert("Organization name must be greater than 15 characters");
        return false;
    }

    return true;
}

function checkMessage(message) {
    if (
        !message ||
        message.length < 50
    ) {
        alert("Message must be greater than 50 characters");
        return false;
    }

    return true;
}

function checkTerms(terms) {
    if (!terms) {
        alert("Terms and Conditions must be accepted");
        return false;
    }

    return true;
}
