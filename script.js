const formulario = document.getElementById('evaluation-form');

const btnForm = document.getElementById('btn');
const login = document.getElementById('loginBtn');
const senhaInput = document.getElementById('senhaBtn');
const email = 'tryber@teste.com';
const senha = '123456';

function Eventclick(e) {
  e.preventDefault();
  if ((login.value === email) && (senhaInput.value === senha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnForm.addEventListener('click', Eventclick);

const env = document.querySelector('#submit-btn');
const box = document.querySelector('#agreement');

function oi() {
  if (box.checked) {
    env.disabled = false;
  } else {
    env.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', oi);

// CONTADOR TEXTAREA
const storyTextArea = document.querySelector('#textarea');
const infoCounter = document.querySelector('#counter');
const limite = 500;

function verificar() {
  const qtdcaracteres = this.value.length;
  const restantes = limite - qtdcaracteres;
  infoCounter.innerHTML = restantes;
}

storyTextArea.addEventListener('keyup', verificar);

//  Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas.

function respostaForm(InfoPreenchidas) {
  formulario.innerHTML = null;
  for (let i = 0; i < InfoPreenchidas.length; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = InfoPreenchidas[i];
    formulario.appendChild(p);
  }
}

function selectBox() {
  const checkboxes = document.querySelectorAll('.subject:checked');
  const arrayCheck = [`${checkboxes[0].value}`];
  for (let i = 1; i < checkboxes.length - 1; i += 1) {
    arrayCheck.push(` ${checkboxes[i].value}`);
  }
  arrayCheck.push(` ${checkboxes[checkboxes.length - 1].value}`);
  return arrayCheck;
}

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectHouse = document.getElementById('house');

function refazForm(e) {
  e.preventDefault();
  const InfoPreenchidas = [];
  InfoPreenchidas.push(`Nome: ${inputName.value} ${inputLastName.value}`);
  InfoPreenchidas.push(`Email: ${inputEmail.value}`);
  InfoPreenchidas.push(`Casa: ${selectHouse.value}`);
  InfoPreenchidas.push(`Família: ${document.querySelector('input[name="family"]:checked').value}`);
  InfoPreenchidas.push(`Matérias: ${selectBox()}`);
  InfoPreenchidas.push(`Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`);
  InfoPreenchidas.push(`Observações: ${storyTextArea.value}`);
  respostaForm(InfoPreenchidas);
}
env.addEventListener('click', refazForm);
