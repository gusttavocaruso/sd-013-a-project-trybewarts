// Requisito 3
function checkLogin() {
  const getLogin = document.querySelector('#login');
  const getPassword = document.querySelector('#password');
  if (getLogin.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const getBtn = document.querySelector('#btn-login');
getBtn.addEventListener('click', checkLogin);

// Requisito 18
const input = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
button.disabled = true;
function sendButton() {
  if (input.value === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
input.addEventListener('change', sendButton);

// Requisito 20
const count = document.querySelector('#counter');
const text = document.querySelector('#textarea');
function textCounter() {
  count.innerHTML = (`${500 - text.value.length} caracteres restantes`);
}
text.addEventListener('keyup', textCounter);

// Requisito 21
const form = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const select = document.getElementById('house');

function chooseFamily() {
  const family = document.getElementsByName('family');
  let result;
  for (let index0 = 0; index0 < family.length; index0 += 1) {
    if (family[index0].checked) {
      result = family[index0].value;
    }
  }
  return result;
}

function chooseMateria() {
  const materia = document.getElementsByClassName('subject');
  let resultMateria = '';
  for (let index1 = 0; index1 < materia.length; index1 += 1) {
    if (materia[index1].checked) {
      resultMateria += (`${materia[index1].value}, `);
    }
  }
  return resultMateria;
}

function chooseNote() {
  const evaluation = document.getElementsByName('rate');
  let resultEvaluation;
  for (let index2 = 0; index2 < evaluation.length; index2 += 1) {
    if (evaluation[index2].checked) {
      resultEvaluation = evaluation[index2].value;
    }
  }
  return resultEvaluation;
}

form.addEventListener('submit', (noSendForm) => {
  const selectedFamily = chooseFamily();
  const selectedMateria = chooseMateria();
  const selectedEvaluation = chooseNote();
  form.innerHTML = '';
  form.innerHTML += (`Nome: ${inputName.value} ${inputLastName.value}<br>`);
  form.innerHTML += (`<br>Email: ${inputEmail.value}<br>`);
  form.innerHTML += (`<br>Casa: ${select.value}<br>`);
  form.innerHTML += (`<br>Família: ${selectedFamily}<br>`);
  form.innerHTML += (`<br>Matérias: ${selectedMateria}<br>`);
  form.innerHTML += (`<br>Avaliação: ${selectedEvaluation}<br>`);
  form.innerHTML += (`<br>Observações: ${text.value}`);
  noSendForm.preventDefault();
});
