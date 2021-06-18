// REALIZA A VERIFICAÇÃO DO LOGIN E SENHA
const loginBtn = document.getElementById('login-btn');

const login = document.getElementById('login');

const senha = document.getElementById('senha');

loginBtn.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// REALIZA A VERIFICAÇÃO DO CHECKBOX PARA HABILITAR O BOTÃO ENVIAR
const checkedAgreement = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');

checkedAgreement.addEventListener('change', function checkBtn() {
  if (this.checked) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', '');
  }
});

// CONTADOR TEXTAREA
const comments = document.getElementById('textarea');

const counter = document.getElementById('counter');
comments.addEventListener('keyup', function countChar() {
  counter.innerText = 500 - this.value.length;
});

// ENVIAR CONTEÚDOS DO FORMULÁRIO
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
  const evaluationForm = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked');
  const subjects = document.querySelectorAll('input[name="content"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const comment = document.getElementById('textarea');
  let content = '';
  for (let i = 0; i < subjects.length; i += 1) {
    content += (`${subjects[i].value}, `);
  }
  content = content.slice(0, -2);
  evaluationForm.innerHTML = `Nome: ${name.value}
  ${lastName.value}<br/> Email: ${email.value}<br/>
  Casa: ${house.value}<br/> Família: ${family.value}<br/> Matérias: ${content}<br/>
  Avaliação: ${rate.value}<br/> Observações: ${comment.value}<br/>`;
});
