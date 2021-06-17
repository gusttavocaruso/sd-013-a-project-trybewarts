const btnLogar = document.querySelector('#btn-logar');
const txtLogin = document.querySelector('#login');
const txtSenha = document.querySelector('#senha');
const btnEnviar = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const comentario = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const txtNome = document.querySelector('#input-name');
const txtSobrenome = document.querySelector('#input-lastname');
const txtEmail = document.querySelector('#input-email');
const listCasa = document.querySelectorAll('#house option');
const rdbSatisfacao = document.querySelectorAll('.evaluation-form-radios input:checked');

const formulario = document.querySelector('#evaluation-form');
const imgTrybewarts = document.querySelector('#trybewarts-forms-logo');


counter.innerHTML = 500;
const qtdCharacters = parseInt(counter.textContent, 10);

btnEnviar.disabled = true;

btnLogar.addEventListener('click', function validarLogin() {
  if (txtLogin.value === 'tryber@teste.com' && txtSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }

  return this;
});

agreement.addEventListener('click', function validateEnviar(event) {
  if (event.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }

  return this;
});

comentario.addEventListener('keyup', function comentarioCount() {
  counter.innerHTML = qtdCharacters - comentario.value.length;

  return this;
});

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
});

btnEnviar.addEventListener('click', function () {
  formulario.style.display = 'none';
  imgTrybewarts.style.display = 'none';
  const rdbFamilia = document.querySelector('.evaluation-form-radio input:checked');
  const chkConteudo = document.querySelectorAll('.evaluation-form-checks input:checked');


  document.querySelector('#resultado-nome').innerHTML = txtNome.value;
  document.querySelector('#resultado-email').innerHTML = txtEmail.value;
  document.querySelector('#resultado-casa').innerHTML = listCasa.value;
  document.querySelector('#resultado-familia').innerHTML = rdbFamilia.value;

  let string = '';
  for (let index = 0; index < chkConteudo.length; index += 1) {
    string += chkConteudo[index].value + ',';
  }
  document.querySelector('#resultado-materias').innerHTML = string;

  // formulario.remove();
  // imgTrybewarts.remove();

});
