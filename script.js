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
  const getPad = document.getElementById('counter');
  const getTextArea = document.getElementsByClassName('textarea');

  getTextArea.addEventListener('keyup', () => {
    getTextArea
  })
}