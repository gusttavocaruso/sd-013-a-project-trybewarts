const botaoLogin = document.querySelector('#botaoLogin');
const checkBox = document.querySelector('#agreement');
const campoTexto = document.querySelector('#textarea');
const botaoSubmit = document.querySelector('#submit-btn');
//const form = document.querySelector('#submit-btn');

function verificaLogin() {
  const campoUser = document.querySelector('#email').value;
  const campoSenha = document.querySelector('#senha').value;
  if ((campoUser !== 'tryber@teste.com') || (campoSenha !== '123456')) {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
}

function habilitaBotao() {
  const botaoTemp = document.querySelector('#submit-btn');
  if (this.checked) {
    botaoTemp.disabled = false;
  } else {
    botaoTemp.disabled = true;
  }
}

function contaDigitos() {
  const counterConst = document.querySelector('#counter');
  const inputLength = campoTexto.value.length;
  const maxChars = 500;
  const calculo = maxChars - inputLength;
  counterConst.innerHTML = calculo;
}

const nome = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');

function apareceInfo() {
  const familia = document.querySelector('input[name=family]:checked');
  document.querySelector('#evaluation-form').remove();
  document.querySelector('#trybewarts-forms-logo').remove();
  const main = document.querySelector('main');
  main.id = 'evaluation-form';
  const section = document.createElement('section');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');

  p1.innerHTML = `Nome: ${nome.value} ${lastName.value}`;
  section.appendChild(p1);
  p2.innerHTML = `Email: ${email.value}`;
  section.appendChild(p2);
  p3.innerHTML = `Casa: ${house.value}`;
  section.appendChild(p3);
  p4.innerHTML = `Família: ${familia.value}`;
  section.appendChild(p4);


  main.appendChild(section);
}

botaoLogin.addEventListener('click', verificaLogin);
checkBox.addEventListener('change', habilitaBotao);
campoTexto.addEventListener('keyup', contaDigitos);
botaoSubmit.addEventListener('click', apareceInfo);
