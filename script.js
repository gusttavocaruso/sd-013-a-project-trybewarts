const buttonLogin = document.getElementById('login-button');

buttonLogin.addEventListener('click', () => {
  const inputlogin = document.getElementById('login-input').value;
  const inputPass = document.getElementById('pass-input').value;
  if (inputlogin !== 'tryber@teste.com' || inputPass !== '123456') {
    return alert('Login ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
});

const sendButton = () => {
  const getEnviar = document.getElementById('submit-btn');
  const getCheckbox = document.getElementById('agreement');

  getCheckbox.addEventListener('click', () => {
    if (getCheckbox.checked === false) {
      getEnviar.disabled = true;
    } else {
      getEnviar.disabled = false;
    }
  });
};

sendButton();

const counterPad = () => {
  const getTextArea = document.getElementById('textarea');

  getTextArea.addEventListener('keyup', () => {
    const getPad = document.getElementById('counter');
    getPad.innerHTML = 500 - getTextArea.value.length;
  });
};

counterPad();

function checkTrueCheckbox() {
  const array = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  const arrayExit = [];
  for (let i = 0; i < array.length; i += 1) {
    if (document.getElementById(array[i]).checked === true) {
      arrayExit.push(` ${array[i]}`);
    }
  }
  return arrayExit;
}

function checkTrueRadioButton() {
  const familyRadio = document.getElementsByName('family');
  let stringReturn = '';
  for (let i = 0; i < familyRadio.length; i += 1) {
    if (familyRadio[i].checked === true) {
      stringReturn = familyRadio[i].value;
    }
  }
  return stringReturn;
}

function checkTrueRateButton() {
  const familyRate = document.getElementsByName('rate');
  let stringReturn = '';
  for (let i = 0; i < familyRate.length; i += 1) {
    if (familyRate[i].checked === true) {
      stringReturn = familyRate[i].value;
    }
  }
  return stringReturn;
}

function getContent() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = checkTrueRadioButton();
  const materias = checkTrueCheckbox();
  const avaliacao = checkTrueRateButton();
  const observacoes = document.getElementById('textarea').value;
  const array = [nome, sobrenome, email, casa, familia, materias, observacoes, avaliacao];
  return array;
}

function deleteMainChilds() {
  document.querySelector('#evaluation-form').innerHTML = '';
  document.querySelector('#trybewarts-forms-logo').remove();
}

function addDivOnMain() {
  const div = document.createElement('div');
  div.setAttribute('id', 'resultado-forms');
  document.querySelector('#evaluation-form').appendChild(div);
}

function writeLines() {
  const div = document.querySelector('#resultado-forms');
  const newUl = document.createElement('ul');
  div.appendChild(newUl);
  for (let i = 0; i < 7; i += 1) {
    const newLi = document.createElement('li');
    newUl.appendChild(newLi);
  }
}

function writeDivForms(array) {
  const ul = document.getElementsByTagName('ul')[0].childNodes;
  ul[0].innerHTML = `Nome: ${array[0]} ${array[1]}`;
  ul[1].innerHTML = `Email: ${array[2]}`;
  ul[2].innerHTML = `Casa: ${array[3]}`;
  ul[3].innerHTML = `Família: ${array[4]}`;
  ul[4].innerHTML = `Matérias:${array[5]}`;
  ul[5].innerHTML = `Avaliação: ${array[7]}`;
  ul[6].innerHTML = `Observações: ${array[6]}`;
}

// Fonte: Mateus Duarte

const formsComplete = () => {
  const sendClick = document.getElementById('submit-btn');
  sendClick.addEventListener('click', () => {
    const array = getContent();
    deleteMainChilds();
    addDivOnMain();
    writeLines();
    writeDivForms(array);
  });
};

formsComplete();
