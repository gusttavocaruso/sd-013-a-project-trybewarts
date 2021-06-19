/* ELEMENTOS */
const textoLogin = document.getElementById('txt_login');
const textoSenha = document.getElementById('txt_senha');
const elementoBotao = document.getElementById('botao_login');
const elementoAgreement = document.getElementById('agreement');
const elementoEnviar = document.getElementById('submit-btn');

const elementoTextArea = document.getElementById('textarea');
const elementoContador = document.getElementById('counter');

elementoEnviar.disabled = true;

/* FUNÇÕES */
function validaLogin() {
  let checaLogin = false;
  if ((textoLogin.value === 'tryber@teste.com') && (textoSenha.value === '123456')) {
    checaLogin = true;
  }
  if (checaLogin === false) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function checaSubmit() {
  if (elementoAgreement.checked === true) {
    elementoEnviar.disabled = false;
    // preencheFormulario();
  } else {
    elementoEnviar.disabled = true;
  }
}

function contaString() {
  console.log('teste');
  const qtdString = elementoTextArea.value.length;
  elementoContador.innerText = (500 - qtdString);
}

/* EVENTOS */
elementoBotao.addEventListener('click', validaLogin);
elementoAgreement.addEventListener('click', checaSubmit);
elementoTextArea.addEventListener('keyup', contaString);

elementoEnviar.addEventListener('click', () => {
  const evaluationForm = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email'); // ok
  const house = document.getElementById('house'); // ok
  const family = document.querySelector('input[name="family"]:checked');
  const subjects = document.querySelectorAll('input[name="content"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const comment = document.getElementById('textarea');
  let content = '';
  for (let i = 0; i < subjects.length; i += 1) {
    content += (`${subjects[i].value}, `);
  }
  content = content.slice(0, -2);
  evaluationForm.innerHTML = `Nome: ${name.value} ${lastName.value}<br/> Email: ${email.value}<br/>
  Casa: ${house.value}<br/> Família: ${family.value}<br/> Matérias: ${content}<br/>
  Avaliação: ${rate.value}<br/> Observações: ${comment.value}<br/>`;
});
