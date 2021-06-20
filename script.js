const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const loginPadrao = 'tryber@teste.com';
const senhaPadrao = '123456';
const buttonLogin = document.querySelector('#buttonLogin');

function loginValido() {
  const loginValue = inputLogin.value;
  const senhaValue = inputSenha.value;

  if (loginValue === loginPadrao && senhaValue === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', loginValido);

// Habilita ou desabilita botão de enviar formulario de acordo com checkbox
const checkbox = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    btnSubmit.disabled = false;
    btnSubmit.style.color = 'white';
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.color = 'rgb(141, 163, 156)';
  }
});

// Cria contador de caracteres da textarea
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textarea.value.length;
});

// Deleta tudo do forms e cria paragrafo com valores dos inputs e botões
const form = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');

function familyValue() {
  const familia = document.getElementsByName('family');
  let resultado;

  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked) {
      resultado = familia[index].value;
    }
  }
  return resultado;
}

function subjectsValues() {
  const materias = document.querySelectorAll('.subject');
  let materiasChecked = '';

  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      materiasChecked += `${materias[index].value}, `;
    }
  }
  return materiasChecked;
}

function rateValue() {
  const avaliacao = document.getElementsByName('rate');
  let resultado;

  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      resultado = avaliacao[index].value;
    }
  }
  return resultado;
}

function title() {
  const h2 = document.createElement('h2');
  h2.className = 'new-title';
  h2.innerText = 'Informações';
  h2.style.margin = '40px auto 60px';

  form.appendChild(h2);
}

btnSubmit.addEventListener('click', () => {
  const familyResult = familyValue();
  const subjectsResult = subjectsValues();
  const rateResult = rateValue();
  form.innerHTML = '';
  title();
  form.innerHTML += `Nome: ${nome.value} ${sobrenome.value} <br>`;
  form.innerHTML += `Email: ${email.value} <br>`;
  form.innerHTML += `Casa: ${casa.value} <br>`;
  form.innerHTML += `Família: ${familyResult} <br>`;
  form.innerHTML += `Matérias: ${subjectsResult} <br>`;
  form.innerHTML += `Avaliação: ${rateResult} <br>`;
  form.innerHTML += `Observações: ${textarea.value}`;
});

