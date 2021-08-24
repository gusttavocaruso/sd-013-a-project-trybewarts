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
const familia1 = document.querySelectorAll('.familys');
const materias1 = document.querySelectorAll('.materia-list');
const avaliacao1 = document.querySelectorAll('#rate-item');
const observacoes1 = document.getElementById('textarea');

const nome2 = document.getElementById('nome2');
const email2 = document.getElementById('email2');
const casa2 = document.getElementById('casa2');
const familia2 = document.getElementById('familia2');
const materias2 = document.getElementById('materias2');
const avaliacao2 = document.getElementById('avaliacao2');
const observacoes2 = document.getElementById('observacoes2');

const formulario1 = document.getElementById('evaluation-form');
const formulario2 = document.getElementById('form-2');

/* Retorna a família selecionada (string) */
function familyChecked() {
  for (let i = 0; i < familia1.length; i += 1) {
    if (familia1[i].checked) {
      return familia1[i].value;
    }
  }
}

/* Retorna os conteúdos selecionados (string) */
function subjectsChecked() {
  let subjectList = '';
  for (let i = 0; i < materias1.length; i += 1) {
    if (materias1[i].checked) {
      subjectList += `   ${materias1[i].value}    ,  `;
    }
  }
  return subjectList;
}

/* Retorna a avaliação selecionada (int) */
function rateChecked() {
  for (let i = 0; i < avaliacao1.length; i += 1) {
    if (avaliacao1[i].checked) {
      return avaliacao1[i].value;
    }
  }
}

function resultForms(event) {
  event.preventDefault();
  nome2.innerHTML = `${nome1.value} ${sobrenome1.value}`;
  email2.innerHTML = `Email: ${email1.value}`;
  casa2.innerHTML = `Casa: ${casa1.value}`;
  familia2.innerText = `Família: ${familyChecked()}`;
  materias2.innerText = `Matéria:  ${subjectsChecked()}`;
  avaliacao2.innerText = `Avaliação: ${rateChecked()}`;
  observacoes2.innerText = `Observações: ${observacoes1.value}`;
  formulario1.style.display = 'none';
  formulario2.style.display = 'block';
  /*  nome2.innerText = 'Doug';
  console.log(nome2); */
}

buttonSubmit.addEventListener('click', resultForms);
