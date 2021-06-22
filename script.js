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

const formsComplete = () => {
  const sendClick = document.getElementById('submit-btn');
  sendClick.addEventListener('click', () => {

    createNewTags();
  })

formsComplete();

const createNewTags = () => {
  const getMainContent = document.getElementsByClassName('mainClass');
  const getCheckboxesValue = document.querySelectorAll('input[name=mycheckboxes]:checked');
  const getFamilyValue = document.querySelectorAll('input[name=family]:checked');
  const getSiteRate = document.querySelector('input[name="rate"]:checked').value;
  const getFullName = document.querySelectorAll('input[name=name]').value;
  const getEmail = document.querySelector('input[name=email]').value;
  const getComents = document.querySelector('input[name=textbox]').value;
  const getHouse = document.querySelector('input[name=houses]').value;

  const getMainContent = document.getElementsByClassName('mainClass');
  let newTag1 = document.createElement('div');
  let newTag2 = document.createElement('ul');
  for (let i = 0; i < 7; i += 1) {
    let newTag2 = document.createElement('li')[i];
  }

  newTag1.innerHTML = 'Formulário'
  getMainContent.appendChild()
}
