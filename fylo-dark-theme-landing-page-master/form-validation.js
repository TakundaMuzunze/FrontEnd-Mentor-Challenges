const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('error-text');
const emailInput = document.getElementById('email');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    validateEmail();
});

function validateEmail() {
    const email = emailInput.value;

    if (email === '') {
        errorMessage.classList.add('error-active');
    } else if (!email.includes('@')) {
        errorMessage.classList.add('error-active');
        errorMessage.textContent = 'Please enter a valid email address';
    } else {
        errorMessage.classList.add('error-success');
        errorMessage.textContent = 'Success!';
        // Perform any other actions if the email is valid
    }
}