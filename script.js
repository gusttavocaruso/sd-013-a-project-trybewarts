const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

function validaEmail() {
  if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const botaoLogin = document.querySelector('#botao-login');
botaoLogin.addEventListener('click', validaEmail);

const inputAgree = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

buttonSubmit.disabled = true;

function ativaSubmit() {
  if (inputAgree.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}
inputAgree.addEventListener('click', ativaSubmit);

const text = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
text.addEventListener('keyup', () => {
  const caracteres = text.value;
  counter.innerHTML = 500 - caracteres.length;
});


const nome1 = document.getElementById('input-name');
const sobrenome1 = document.getElementById('input-lastname');
const email1 = document.getElementById('input-email');
const casa1 = document.getElementById('house');
const familia1 = document.getElementById('familia');
const materias1 = document.getElementById('materias');
const avaliacao1 = document.getElementById('container-labelRate');
const observacoes1 = document.getElementById('textarea');

let nome2 = document.getElementById('nome2');
let email2 = document.getElementById('email12');
let casa2 = document.getElementById('casa2');
let familia2 = document.getElementById('familia2');
let materias2 = document.getElementById('materias2');
let avaliacao2 = document.getElementById('avaliacao2');
let observacoes2 = document.getElementById('observacoes2');

const formulario1 = document.getElementById('evaluation-form');
const formulario2 = document.getElementById('form-2');


function resultForms() {

  nome2.innerHTML = 'Nome:'+ nome1.value+' '+ nome2.value;
  email2.innerHTML = 'Email: '+email1.value;
  
  formulario1.style.display = 'none';
  formulario2.style.display = 'block';

}

buttonSubmit.addEventListener('click', resultForms);