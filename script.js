const loginUser = document.getElementById('login');
const passwordUser = document.getElementById('senha');
const buttonClick = document.getElementById('button1');
const numRadioBtn = document.getElementById('avaliacao');
const radioButtons = 10;
const checkBtn = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');
const obsAreaText = document.getElementById('textarea');

function gerarAlerta() {
  if ((loginUser.value === 'tryber@teste.com') && (passwordUser.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const makeNumRadioBtn = (n) => {
  for (let i = 0; i < n; i += 1) {
    const radioBox = document.createElement('input');
    radioBox.setAttribute('type', 'radio');
    radioBox.setAttribute('name', 'rate');

    const radioLabel = document.createElement('label');
    const num = i + 1;
    const radioName = num.toString();
    radioBox.setAttribute('value', radioName);
    radioLabel.setAttribute('for', radioName);
    radioLabel.innerHTML = radioName;

    numRadioBtn.appendChild(radioBox);
    numRadioBtn.appendChild(radioLabel);
  }
}; makeNumRadioBtn(radioButtons);

function getNameOfCheckBoxes(boxList) {
  let r = '';
  const size = boxList.length;
  for (let i = 0; i < size; i += 1) {
    r = r.concat(boxList[i].value);
    if (i < size - 1) {
      r = r.concat(', ');
    }
    console.log(r);
  }
  return r;
}

const saveInfo = () => {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const family = document.querySelector('input[name=family]:checked').value;
  const checked = getNameOfCheckBoxes(document.querySelectorAll('input[name=content]:checked'));
  const avaliacao = document.querySelector('input[name=rate]:checked').value;
  const observacoes = document.querySelector('#textarea').value;
  const newForm = `
  <p>Nome: ${nome} ${sobrenome}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${casa}</p>
  <p>Família: ${family}</p>
  <p>Matérias: ${checked}</p>
  <p>Avaliação: ${avaliacao}</p>
  <p>Observações: ${observacoes}</p>`;
  const oldForm = document.getElementById('evaluation-form');
  oldForm.innerHTML = newForm;
};

const charCounter = () => {
  const charsUsed = obsAreaText.value.length;
  const maxChars = obsAreaText.maxLength;
  const charsLeft = maxChars - charsUsed;
  document.getElementById('counter').innerHTML = `Restam <mark>${charsLeft}</mark> caracteres.`;
};
charCounter();
const submitBtnOn = () => { enviar.disabled = !(checkBtn.checked); };
const noLoadOnSubmit = (e) => { e.preventDefault(); saveInfo(); };

buttonClick.addEventListener('click', gerarAlerta);
checkBtn.addEventListener('click', submitBtnOn);
enviar.addEventListener('click', noLoadOnSubmit);
enviar.addEventListener('submit', saveInfo);
obsAreaText.addEventListener('input', charCounter);
