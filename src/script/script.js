const emailInput = document.getElementById('email');
const submitButton = document.getElementById('sendEmailButton');
const errorMessage = document.getElementById('errorMessage');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;

    function checkEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    if (emailValue === "") {
        errorMessage.textContent = "Please enter an email.";
        errorMessage.style.display = "block";
    } else if (!checkEmail(emailValue)) {
        errorMessage.textContent = "Please provide a valid email";
        errorMessage.style.display = "block";
    }
    else{
        errorMessage.style.display ="none";
    }
});