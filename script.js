const valid = 'tryber@teste.com';
const validPass = '123456';
const bLogin = document.getElementById('login-btn');
bLogin.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === valid && senha === validPass) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const checker = document.getElementById('agreement');
const sendBtn = document.getElementById('submit-btn');

checker.onchange = function habilita() {
  if (this.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
};

function getFamily() {
  const family = document.getElementsByName('family');
  for (const key in family) {
    if (family[key].checked) {
      return family[key].value
    }
  }
}

function getSubjected() {
  const subjects = document.getElementsByClassName('subject');
  let selected= '';
  for (const key in subjects) {
    if (subjects[key.checked]) {
      selected += subjects[key].value
    }
  } 
  return selected;
}

function getAvaliation() {
  const avaliacoes = document.getElementsByName('rate');
  for (const key in avaliacoes) {
    if (avaliacoes[key].checked) {
      return avaliacoes[key].value
    }
  }
}

const name

function preencheForm() {
  const familiaSelecionada = getFamily();
  const subObjetoSelecionado = getSubjected();
  const avaliacaoDoUsuario = getAvaliation();
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${inputName.value} ${inputLastN.value} <br>`;
  form.innerHTML += `Email: ${inputEmail.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: ${familiaSelecionada} <br>`;
  form.innerHTML += `Matérias: ${subObjetoSelecionado} <br>`;
  form.innerHTML += `Avaliação: ${avaliacaoDoUsuario} <br>`;
  form.innerHTML += `Observações: ${textArea.value}`;
}