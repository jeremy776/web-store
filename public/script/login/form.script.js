const email = document.getElementById('email');
const password = document.getElementById('password');
let button = document.getElementById('submit-button');

password.addEventListener('input', (e) => {
    console.log(email.value);
    if(email.value.length > 0) {
        button.removeAttribute('disabled');
        console.log(button)
    }
});