const formButton = document.querySelector('.btn-submit');
const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
let formMessages = [];

function validadeHeaderForm() {
  const login = inputLogin.value;
  const senha = inputSenha.value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

formButton.addEventListener('click', validadeHeaderForm);

function validateBtn(btn) {
  // const btn = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled');
    }
  });
}

const textarea = document.querySelector('#textarea');
const spanContador = document.querySelector('#counter');

function limiteTextarea() {
  const quant = 500;
  let contador = 0;
  spanContador.innerHTML = quant;

  textarea.addEventListener('keyup', () => {
    const textLength = textarea.value.length;
    contador = quant - textLength;
    console.log(contador);
    spanContador.innerHTML = contador;
  });
}

function createNameMessage() {
  const firstName = document.querySelector('[name=input-name]').value.trim();
  const lastName = document.querySelector('[name=input-lastname]').value.trim();
  const message = `Nome: ${firstName} ${lastName}`;
  formMessages.push(message);
}

function createEmailMessage() {
  const email = document.querySelector('[name=input-email]').value.trim();
  const message = `Email: ${email}`;
  formMessages.push(message);
}

function createHouseMessage() {
  const house = document.querySelector('#house');
  const houseSelected = house.options[house.selectedIndex].text;
  const message = `Casa: ${houseSelected}`;
  formMessages.push(message);
}

function createFamilyMessage() {
  const family = document.querySelector('input[name="family"]:checked').value;
  const message = `Familia: ${family}`;
  formMessages.push(message);
}

// function renderMessage() {
//   const form = document.querySelector('#evaluation-form');
//   form.style.display = "none";
//   // const messageArea = document.querySelector('.form-data');
//   // for (let i = 0; i < formMessages; i += 1 ) {
//   //   const p = document.createElement('p');
//   //   console.log(p);
//     // p.innerHTML = formMessages[i];
//     // messageArea.appendChild(p);
//   // }
// }

function handleSubmit(event) {
  event.preventDefault();
  createNameMessage();
  createEmailMessage();
  createHouseMessage();
  createFamilyMessage();
  console.log(formMessages);
  // renderMessage();
}

window.onload = () => {
  const btnSubmit = document.querySelector('#submit-btn');
  validateBtn(btnSubmit);
  limiteTextarea();
  btnSubmit.addEventListener('click', handleSubmit);
};
