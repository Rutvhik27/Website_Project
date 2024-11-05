const form = document.getElementById('contactForm');
const errorMessage = document.getElementById('error-message');
const validateName = (name) => {
    return name.length >= 3;
};
const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
};

const validateMessage = (message) => {
    return message.length >= 10; 
};
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!validateName(name)) {
        errorMessage.textContent = 'Name must be at least 3 characters long.';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
    } else if (!validateMessage(message)) {
        errorMessage.textContent = 'Message must be at least 10 characters long.';
    } else {
        errorMessage.textContent = '';
        alert('Form submitted successfully!');
        form.reset();
    }
});
