function alertaLogin() {
  const getButton = document.querySelector('#button1');
  const getEmail = document.querySelector('#email');
  const getSenha = document.querySelector('#senha');

  getButton.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}
alertaLogin();

// ===============================================================
//     REQUISITO 18 - BOTÃO ENVIAR
// ===============================================================

const checkbox = document.getElementById('agreement');

function buttonSubmit() {
  const agreement = document.getElementById('agreement').checked;
  const btn = document.getElementById('submit-btn');
  if (agreement) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkbox.addEventListener('input', buttonSubmit);

// ===============================================================
//     REQUISITO 20 - CONTADOR
// ===============================================================

const maxLength = 500;
const area = document.getElementById('textarea');

function countTextArea() {
  const span = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  const count = textarea.value.length;
  span.innerText = maxLength - count;
}

area.addEventListener('input', countTextArea);

// ===============================================================
//                     REQUISITO 21
// ===============================================================

const button2 = document.getElementById('submit-btn');
const Form = document.getElementById('evaluation-form');
const formDiv = document.getElementById('form');
const newDiv = document.createElement('div');
Form.appendChild(newDiv);

// criando o nome e sobrenome
function NomeSobrenome() {
  const nome = document.getElementById('input-name');
  const sobrenome = document.getElementById('input-lastname');
  const addNome = document.createElement('p');
  newDiv.appendChild(addNome);
  const nomeCompleto = `Nome: ${nome.value} ${sobrenome.value}`;
  addNome.innerHTML = nomeCompleto;
}
function Email() {
  const email = document.getElementById('input-email').value;
  const addEmail = document.createElement('p');
  newDiv.appendChild(addEmail);
  addEmail.innerHTML = `Email: ${email}`;
}
function Casa() {
  const casa = document.getElementById('house').value;
  const addCasa = document.createElement('p');
  newDiv.appendChild(addCasa);
  addCasa.innerHTML = `Casa: ${casa}`;
}
function Family() {
  const family = document.querySelector('[name=family]:checked').value;// utiliza queryselector pois possui somente "id" consulta ao site "https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button"
  const addFamily = document.createElement('p');
  newDiv.appendChild(addFamily);
  addFamily.innerHTML = `Família: ${family}`;
}
function Materias() { // pesquisa ao site "https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes/31113246"
  const materias = document.querySelectorAll('[class="subject"]:checked'); // utiliza queryselectorAll pois possui  "id" e "class"
  const materiasSelecionadas = [];
  for (let index = 0; index < materias.length; index += 1) {
    materiasSelecionadas.push(` ${materias[index].value}`);
  }
  const addMaterias = document.createElement('p');
  newDiv.appendChild(addMaterias);
  addMaterias.innerHTML = `Matérias: ${materiasSelecionadas}`;
}
function Avaliacao() {
  const avaliacao = document.querySelector('[name=rate]:checked').value;
  const addAvaliacao = document.createElement('p');
  newDiv.appendChild(addAvaliacao);
  addAvaliacao.innerHTML = `Avaliação: ${avaliacao}`;
}
function Observacao() {
  const observacoes = document.getElementById('textarea').value;
  const addObservacao = document.createElement('p');
  newDiv.appendChild(addObservacao);
  addObservacao.innerHTML = `Observações: ${observacoes}`;
}
button2.addEventListener('click', () => {
  NomeSobrenome();
  Email();
  Casa();
  Family();
  Materias();
  Avaliacao();
  Observacao();
  formDiv.remove();
});
