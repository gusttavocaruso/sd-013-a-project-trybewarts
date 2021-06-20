const loginUser = document.getElementById('login');
const passwordUser = document.getElementById('senha');
const buttonClick = document.getElementById('button1');
const numRadioBtn = document.getElementById('avaliacao');
const radioButtons = 10;
const checkBtn = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');


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

    numRadioBtn.appendChild(radioLabel);
    numRadioBtn.appendChild(radioBox);

  }
}; makeNumRadioBtn(radioButtons);

const submitBtnOn = () => { enviar.disabled = !(checkBtn.checked); };

buttonClick.addEventListener('click', gerarAlerta);
checkBtn.addEventListener('click', submitBtnOn);
