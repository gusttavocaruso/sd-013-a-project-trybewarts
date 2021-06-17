const validaInfo = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
contador.innerText = textArea.maxLength;
const login = document.querySelector('input[type="login"]');
const password = document.querySelector('input[type="password"]');
const btnLogin = document.getElementById('topBar');

function loginValidate() {
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnLogin.addEventListener('click', loginValidate);

function concordaInfo() {
  if (validaInfo.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

validaInfo.addEventListener('click', concordaInfo);

function contaCaracteres() {
  const tamanhoTexto = textArea.value.length;
  contador.innerText = textArea.maxLength - tamanhoTexto;
}

textArea.addEventListener('keyup', contaCaracteres);

// https://stackoverflow.com/questions/20068487/getting-multiple-selected-checkbox-values-in-a-string-in-javascript-and-php
function montaString(conteudoNode) {
  let vals = '';

  for (let i = 0, n = conteudoNode.length; i < n; i += 1) {
    if (conteudoNode[i].checked) {
      vals += `${conteudoNode[i].value}, `;
    }
  }
  return vals;
}

// https://stackoverflow.com/questions/590018/getting-all-selected-checkboxes-in-an-array
// https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes/31113246
// https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
// https://flaviocopes.com/how-to-check-checkbox-checked/
function pegaConteudo(event) {
  event.preventDefault();
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const conteudoNode = document.querySelectorAll('.subject:checked');
  const conteudosString = montaString(conteudoNode);
  console.log(conteudoNode);
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const comentario = textArea.value;
  const formCompleto = document.querySelector('#evaluation-form');
  formCompleto.innerHTML = `<div id="done"><h1>Resultado do Forms</h1><hr>
  <strong><p>Nome:</strong> ${nome} ${sobrenome}</p>
  <strong><p>Email:</strong> ${email}</p>
  <strong><p>Casa:</strong> ${casa}</p><p><strong>Família:</strong> ${familia}</p>
  <p><strong>Matérias:</strong> ${conteudosString}</p><p><strong>Avaliação:</strong> ${avaliacao}</p>
  <p><strong>Observações:</strong> ${comentario}</p></div>`;
}

submitBtn.addEventListener('click', pegaConteudo);

function autosize(event) {
  event.target.style.cssText = `height:${event.target.scrollHeight}px`;
}

textArea.addEventListener('keydown', autosize);