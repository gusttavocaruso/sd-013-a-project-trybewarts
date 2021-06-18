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

// Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada (requesito 18)
const sendButtom = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');
sendButtom.disabled = true;
checkAgree.addEventListener('click', () => {
  if (checkAgree.checked === true) {
    sendButtom.disabled = false;
  } else {
    sendButtom.disabled = true;
  }
});

// Requisito 14
const radioDiv = document.querySelector('.radio-buttons-rate');
for (let index = 1; index <= 10; index += 1) {
  const label = document.createElement('label');
  const radio = document.createElement('input');
  label.setAttribute('for', `radio-button-${index}`);
  label.innerHTML = index;
  radio.type = 'radio';
  radio.name = 'rate';
  radio.value = index;
  radio.id = `radio-button-${index}`;
  label.appendChild(radio);
  radioDiv.appendChild(label);
}
