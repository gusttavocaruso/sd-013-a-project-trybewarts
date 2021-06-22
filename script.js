const btnLogar = document.querySelector('#btn-logar');
const txtLogin = document.querySelector('#login');
const txtSenha = document.querySelector('#senha');
const btnEnviar = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const comentario = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const txtNome = document.querySelector('#input-name');
const txtSobrenome = document.querySelector('#input-lastname');
const txtEmail = document.querySelector('#input-email');
const tagMain = document.querySelector('.form-principal');

counter.innerHTML = 500;
const qtdCharacters = parseInt(counter.textContent, 10);

btnEnviar.disabled = true;

btnLogar.addEventListener('click', function validarLogin() {
    if (txtLogin.value === 'tryber@teste.com' && txtSenha.value === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert('Login ou senha inválidos.')
    }

    return this;
});

agreement.addEventListener('click', function validateEnviar(event) {
  if (event.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }

  return this;
});

comentario.addEventListener('keyup', function commentCount() {
  counter.innerHTML = qtdCharacters - comentario.value.length;

  return this;
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
});

const createUl = () => {
  const ul = document.createElement('ul');
  ul.id = 'evaluation-form';
  tagMain.appendChild(ul);
};

const createListItemResult = () => {
  const listItem = document.createElement('li');
  const ulResult = document.querySelector('.form-principal ul');
  return ulResult.appendChild(listItem);
};

const createResult = () => {
  const rdbFamilia = document.querySelector('.evaluation-form-radio input:checked');
  const chkConteudo = document.querySelectorAll('.evaluation-form-checks input:checked');
  const rdbSatisfacao = document.querySelector('.evaluation-form-radios input:checked');
  const listCasa = document.querySelector('#house option:checked');
  const result = createListItemResult();

  let materias = '';
  for (let index = 0; index < chkConteudo.length; index += 1) {
    materias += `${chkConteudo[index].value}, `;
  }

  result.innerText = `Nome: ${txtNome.value} ${txtSobrenome.value}
  Email: ${txtEmail.value}
  Casa: ${listCasa.value}
  Família: ${rdbFamilia.value}
  Matérias: ${materias}
  Avaliação: ${rdbSatisfacao.value}
  Observações: ${comentario.value}`;
  formulario.remove();
};

btnEnviar.addEventListener('click', () => {
  createUl();
  createResult();
});

