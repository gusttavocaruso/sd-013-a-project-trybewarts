// Requisito 3
const formButton = document.querySelector('.trybewarts-login button');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

formButton.addEventListener('click', () => {
  if (inputEmail.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada (requesito 18)
const sendButtom = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');
sendButtom.checked = true;
console.log(sendButtom.toggleAttribute);
function sendForm() {
  if (checkAgree.checked === true) {
    sendButtom.disabled = false;
  } else {
    sendButtom.disabled = true;
  }
}
checkAgree.addEventListener('click', sendForm);
