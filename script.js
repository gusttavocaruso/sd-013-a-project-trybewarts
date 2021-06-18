const botaoLogin = document.querySelector('#botaoLogin');
const checkBox = document.querySelector('#agreement');
const campoTexto = document.querySelector('#textarea');
const botaoSubmit = document.querySelector('#submit-btn');
// const form = document.querySelector('#submit-btn');

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
  const materias = document.querySelectorAll('.subject:checked');
  const notaMarcada = document.querySelector('input[name=rate]:checked');
  const textoArea = document.querySelector('#textarea');
  document.querySelector('#evaluation-form').remove();
  document.querySelector('#trybewarts-forms-logo').remove();
  const main = document.querySelector('main');
  main.id = 'evaluation-form';
  const section = document.createElement('section');
  let tempMaterias = '';
  for (let i = 0; i < materias.length; i += 1) {
    tempMaterias += `${materias[i].value}, `;
  }
  section.innerHTML = `<p>Nome: ${nome.value} ${lastName.value}</p> <p>Email: ${email.value}</p>
  <p>Casa: ${house.value}</p> <p>Família: ${familia.value}</p> <p>Matérias: ${tempMaterias}</p>
  <p>Avaliação: ${notaMarcada.value}</p> <p>Observações: ${textoArea.value}</p>`;

  main.appendChild(section);
}

botaoLogin.addEventListener('click', verificaLogin);
checkBox.addEventListener('change', habilitaBotao);
campoTexto.addEventListener('keyup', contaDigitos);
botaoSubmit.addEventListener('click', apareceInfo);
