// Requisito 3
const formButton = document.querySelector('.trybewarts-login button');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

formButton.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 14
const radioDiv = document.querySelector('.radio-buttons-rate');
for (let index = 1; index <= 10; index += 1) {
  let label = document.createElement('label');
  let radio = document.createElement('input');
  label.setAttribute("for", `radio-button-${index}`);
  label.innerHTML = index;
  radio.type = 'radio';
  radio.name = 'rate';
  radio.value = index;
  radio.id = `radio-button-${index}`;
  label.appendChild(radio);
  radioDiv.appendChild(label);
}
