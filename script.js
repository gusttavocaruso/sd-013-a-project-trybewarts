const botaoLogar = document.getElementById('logar');
const login = document.getElementById('login');
const password = document.getElementById('password');

botaoLogar.addEventListener('click', () => {
  if ((login.value === 'tryber@teste.com') && (password.value === '123456')) {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
});

const checker = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');

const activate = () => {
  if (checker.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
};

activate();

const textArea = document.querySelector('#textarea');
const counter = document.getElementById('counter');

textArea.onkeyup = function Math() {
  counter.innerHTML = `${500 - this.value.length} restantes`;
};

function verificarFamilia() {
  const family = document.getElementsByName('family');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
}

const house = document.querySelector('#house');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');

function verificarConteudos() {
  const subjects = document.getElementsByClassName('subject');
  let subjectsSelected = '';
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      subjectsSelected += `${subjects[i].value}, `;
    }
  }
  return subjectsSelected;
}

function verificarAvaliacao() {
  const evaluation = document.getElementsByName('rate');
  for (let i = 0; i < evaluation.length; i += 1) {
    if (evaluation[i].checked) {
      return evaluation[i].value;
    }
  }
}

function trocarInputs() {
  const familySelected = verificarFamilia();
  const subjectsSelected = verificarConteudos();
  const npsEvaluation = verificarAvaliacao();
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${nome.value} ${sobrenome.value} <br>`;
  form.innerHTML += `Email: ${email.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: ${familySelected} <br>`;
  form.innerHTML += `Matérias: ${subjectsSelected} <br>`;
  form.innerHTML += `Avaliação: ${npsEvaluation} <br>`;
  form.innerHTML += `Observações: ${textArea.value}`;
}

sendbtn.addEventListener('click', trocarInputs);
