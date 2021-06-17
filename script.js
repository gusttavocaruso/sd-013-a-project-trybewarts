function alertaLogin() {
  const getButton = document.querySelector('#button1');
  const getEmail = document.querySelector('#email');
  const getSenha = document.querySelector('#senha');

  getButton.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}
alertaLogin();

// ===============================================================
//     REQUISITO 18 - BOTÃO ENVIAR
// ===============================================================

const checkbox = document.getElementById('agreement');

function buttonSubmit() {
  const agreement = document.getElementById('agreement').checked;
  const btn = document.getElementById('submit-btn');
  if (agreement) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkbox.addEventListener('input', buttonSubmit);

// ===============================================================
//     REQUISITO 20 - CONTADOR
// ===============================================================

const maxLength = 500;
const area = document.getElementById('textarea');

function countTextArea() {
  const span = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  const count = textarea.value.length;
  span.innerText = maxLength - count;
}

area.addEventListener('input', countTextArea);

// ===============================================================
//                     REQUISITO 21
// ===============================================================

// const btnSubmit = document.getElementById('submit-btn');
// const main = document.getElementById('main');

// function button () {
//   const inputName = document.getElementById('input-name').value;
//   const inputLastName = document.getElementById('input-lastname').value;
//   const inputEmail = document.getElementById('input-email').value;
//   const inputHouse = document.getElementById('house').value;

// }

// function nameAndLastName() {
//   const inputName = document.getElementById('input-name');
//   const inputLastName = document.getElementById('input-lastname');
//   const name = inputName.value;
//   const lastName = inputLastName.value;
//   const createP = document.createElement('p');
//   createP.innerText = `Nome: ${name} ${lastName}`;
//   main.appendChild(createP);
// }

// function email() {
//   const inputEmail = document.getElementById('input-email');
//   const inputValue = inputEmail.value;
//   const createPa = document.createElement('p');
//   createPa.innerText = `Email: ${inputValue}`;
//   main.appendChild(createPa);
// }

// function removeForm () {
//   const form = document.getElementsByTagName('form');
//   form.remove();
// }

// btnSubmit.addEventListener('click', nameAndLastName, email, removeForm);
