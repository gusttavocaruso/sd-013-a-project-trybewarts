const buttonHeader = document.getElementById('button-submit-header');
const inputLogin = document.getElementById('login-input');
const inputSenha = document.getElementById('senha-input');

function verificarFormHeader() {
  const login = inputLogin.value;
  const senha = inputSenha.value;
  if ((senha === '123456') && (login === 'tryber@teste.com')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonHeader.addEventListener('click', verificarFormHeader);

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

const inputAgreement = document.getElementById('agreement')

function verificaCheck() {
  const conteudo = document.getElementById('agreement').value;
  if (conteudo !== null || conteudo !== '') {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

inputAgreement.addEventListener('input', verificaCheck);

const textArea = document.querySelector('#textarea');
const conter = document.querySelector('#counter');

function contadorCaractere() {
  const value = textArea.value.length;
  conter.innerText = 500 - value + ' caracteres restantes.';  
}

textArea.addEventListener('input', contadorCaractere);

function checkMaterias() {
  const arrayMaterias = [];
  const elemMaterias = document.querySelectorAll('.subject');
  for (let index = 0; index < elemMaterias.length - 1; index += 1) {
    if (elemMaterias[index].checked) {
      arrayMaterias.push(` ${elemMaterias[index].value}`);
    }
  }
  return arrayMaterias;
}

function newContent(event) {
  event.preventDefault();
  const form = document.querySelector('#evaluation-form');
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const familia = document.querySelector("[name='family']:checked").value;
  const materias = checkMaterias();
  const avaliacao = document.querySelector("[name='rate']:checked").value;
  const textAreavalue = document.querySelector('#textarea').value;

  form.innerText = '';

  const p = document.createElement('p');
  form.appendChild(p);
  p.classList.add('p-form')
  p.innerHTML = `Nome: ${nome} ${sobrenome}</br>
  Email: ${email} </br>
  Casa: ${casa} </br>
  Família: ${familia} </br>
  Matérias: ${Object.values(materias)} </br>
  Avaliação: ${avaliacao} </br>
  Observações: ${textAreavalue}`;
}

submitBtn.addEventListener('click', newContent);
