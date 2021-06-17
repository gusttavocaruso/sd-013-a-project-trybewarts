const botaoLogin = document.querySelector('#botaoLogin');
const checkBox = document.querySelector('#agreement');
const campoTexto = document.querySelector('#textarea');
const botaoSubmit = document.querySelector('#submit-btn');
const form = document.querySelector('#submit-btn');

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
function apareceInfo() {
  document.querySelector('#evaluation-form').remove();
  const main = document.querySelector('main');
  const section = document.createElement('section');

  section.innerHTML = `Nome: ${nome.value}`;
  main.appendChild(section);
}

botaoLogin.addEventListener('click', verificaLogin);
checkBox.addEventListener('change', habilitaBotao);
campoTexto.addEventListener('keyup', contaDigitos);
botaoSubmit.addEventListener('click', apareceInfo);
