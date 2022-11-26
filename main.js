const body = document.querySelector('body');
const registerForm = document.querySelector('.form')

const firstNameInput = document.getElementById('first-name-input')
const lastNameInput = document.getElementById('last-name-input')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const repeatPasswordInput = document.getElementById('repeat-password-input')
const errorContainer = document.getElementById ('error-container')
//console.dir(registerForm)

function processForm(event) {
   // console.dir(event, 'EVENTO')
    event.preventDefault();
let error = '';

/*
console.dir('Valor firstName:', firstNameInput.value)
console.dir('Valor lastName:', lastNameInput.value)
console.dir('Valor email:', emailInput.value)
console.dir('Valor password:', passwordInput.value)
console.dir('Valor repeatPassword:', repeatPasswordInput.value)
*/

// validar la data
if (firstNameInput.value.length > 20) {
    error += '<li>El nombre es muy largo. </li>'
}
if (lastNameInput.value.length > 20) {
    error += '<li>El apellido es muy largo. </li>'
}
if (!emailInput.value.includes('@gmail.com')) {
    error += '<li>El email no es de Google. </li>'
}
if (passwordInput.value !== repeatPasswordInput.value) {
    error += '<li>Las contraseñas no coinciden. </li>'
}

if (error !== '') {
errorContainer.style.display = 'flex';
}

errorContainer.innerHTML = error;
}






// registerForm.addEventListener('submit, processForm')

registerForm.onsubmit = processForm