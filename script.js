const getEmailInput = document.querySelector('#email');
const getPasswordInput = document.querySelector('#password');
const getLoginButton = document.querySelector('#input-login-button');

const loginValidator = () => {
  if (getEmailInput.value === 'tryber@teste.com' && getPasswordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};
getLoginButton.addEventListener('click', loginValidator);

const trybewartsRating = () => {
  const getRatingContainer = document.querySelector('.rating-container');

  for (let i = 1; i <= 10; i += 1) {
    const setInputNumber = document.createElement('input');
    setInputNumber.type = 'radio';
    setInputNumber.value = i;
    setInputNumber.id = `rating${i}`;
    setInputNumber.name = 'rate';

    const setInputLabel = document.createElement('label');
    setInputLabel.innerHTML = `<label for="rating${i}" id="label${i}">${i}</label>`;

    getRatingContainer.appendChild(setInputNumber);
    getRatingContainer.appendChild(setInputLabel);
  }
};
trybewartsRating();

const getAgreementCheck = document.querySelector('#agreement');
const getSubmitButton = document.querySelector('#submit-btn');

getAgreementCheck.addEventListener('input', () => {
  if (getAgreementCheck.value === 'agree') {
    getSubmitButton.removeAttribute('disabled');
  } else {
    getSubmitButton.setAttribute('disabled', '_self');
  }
});

const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');

const setCounterLength = (event) => {
  const getTextLength = event.target.value;
  const setCharactersLeft = getTextArea.maxLength - getTextLength.length;

  getCounter.innerText = setCharactersLeft;
};

getTextArea.addEventListener('keyup', setCounterLength);

// Funções do Requisito 22
const getInputResults = document.querySelector('#result-section');
const getName = document.querySelector('#input-name');
const getLastName = document.querySelector('#input-lastname');
const getEmail = document.querySelector('#input-email');
const getHouse = document.querySelector('#house');

const setNameInput = () => {
  const setName = document.createElement('p');
  setName.classList.add('result');
  setName.innerText = `Nome: ${getName.value} ${getLastName.value}`;

  getName.innerText = `Nome: ${getName.value} ${getLastName.value}`;
  getInputResults.appendChild(setName);
};

const setEmailInput = () => {
  const setEmail = document.createElement('p');
  setEmail.classList.add('result');
  setEmail.innerText = `Email: ${getEmail.value}`;

  getEmail.innerText = `Email: ${getEmail.value}`;
  getInputResults.appendChild(setEmail);
};

const setHouseInput = () => {
  const setHouse = document.createElement('p');
  setHouse.classList.add('result');
  setHouse.innerText = `Casa: ${getHouse.value}`;

  getInputResults.appendChild(setHouse);
  getHouse.innerText = setHouse.innerText;
};

// Ideia para retirar input value de um radio input = https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button

const setFamilyInput = () => {
  const getFamilyInput = document.querySelector('input[name="family"]:checked');
  const setFamily = document.createElement('p');

  setFamily.classList.add('result');
  setFamily.innerText = `Família: ${getFamilyInput.value}`;

  getFamilyInput.innerText = `Família: ${getFamilyInput.value}`;
  getInputResults.appendChild(setFamily);
};

const setContentInput = () => {
  const getContentInput = document.querySelectorAll('input[name="content"]:checked');
  const arr = [];

  let result = '';
  for (let i = 0; i < getContentInput.length; i += 1) {
    arr.push(getContentInput[i].value);
  }
  result = arr.join(', ');

  const setContent = document.createElement('p');

  setContent.classList.add('result');
  setContent.innerHTML = `Matérias: ${result}`;
  getInputResults.appendChild(setContent);
};

const setEvaluationInput = () => {
  const getRateInput = document.querySelector('input[name="rate"]:checked');
  const setRate = document.createElement('p');

  setRate.classList.add('result');
  setRate.innerText = `Avaliação: ${getRateInput.value}`;
  getRateInput.innerText = `Avaliação: ${getRateInput.value}`;
  getInputResults.appendChild(setRate);
};

const setCommentInput = () => {
  const getCommentInput = document.querySelector('#textarea');
  const setComment = document.createElement('p');

  setComment.classList.add('result');
  setComment.innerText = `Observações: ${getCommentInput.value}`;
  getCommentInput.innerText = `Observações: ${getCommentInput.value}`;
  getInputResults.appendChild(setComment);
};

getSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();

  getInputResults.classList.add('input-results');

  setNameInput();
  setEmailInput();
  setHouseInput();
  setFamilyInput();
  setContentInput();
  setEvaluationInput();
  setCommentInput();
});
