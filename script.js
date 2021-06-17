const formLogin = document.querySelector('#form-login');
function verificaLogin() {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
formLogin.addEventListener('submit', verificaLogin);

const checkboxConcorda = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
function checkConcorda(event) {
  if (event.srcElement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
checkboxConcorda.addEventListener('click', checkConcorda);

const textarea = document.querySelector('#textarea');
function contadorCaracter(event) {
  const counter = document.querySelector('#counter');
  const contador = 500;
  counter.innerHTML = contador - event.target.value.length;
}
textarea.addEventListener('keyup', contadorCaracter);

const evaluationForm = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputSelect = document.querySelector('#house');
const radioAvalaia = document.querySelectorAll('.radioAvalia');
const radioFamilia = document.querySelectorAll('.radioFamilia');
const checkbosAprender = document.querySelectorAll('.checkbosAprender');
const textArea = document.querySelector('#textarea');

function loopRadios(radioList) {
  for (let index = 0; index < radioList.length; index += 1) {
    if (radioList[index].checked === true) {
      return radioList[index].value;
    }
  }
}

function loopCheckBox(radioList) {
  let listaMaterias = '';
  for (let index = 0; index < radioList.length; index += 1) {
    if (radioList[index].checked === true) {
      listaMaterias += `${radioList[index].value}, `;
    }
  }
  return listaMaterias;
}

function salveForm(event) {
  event.preventDefault();
  const option = inputSelect.options[inputSelect.selectedIndex];
  evaluationForm.innerHTML = `<p>Nome: ${inputName.value} ${inputLastName.value}</p>`;
  evaluationForm.innerHTML += `<p>Email: ${inputEmail.value}</p>`;
  evaluationForm.innerHTML += `<p>Casa: ${option.value}</p>`;
  evaluationForm.innerHTML += `<p>Família: ${loopRadios(radioFamilia)}</p>`;
  evaluationForm.innerHTML += `<p>Matérias: ${loopCheckBox(checkbosAprender).slice(0, -2)}</p>`;
  evaluationForm.innerHTML += `<p>Avaliação: ${loopRadios(radioAvalaia)}</p>`;
  evaluationForm.innerHTML += `<p>Observações: ${textArea.value}</p>`;
}
evaluationForm.addEventListener('submit', salveForm);
