function loginAuth() {
  const submitButton = document.querySelector('#login-button');
  submitButton.addEventListener('click', (event) => {
    const loginButton = document.querySelector('#login').value;
    const passwordButton = document.querySelector('#password').value;
    event.preventDefault();

    if (loginButton === 'tryber@teste.com' && passwordButton === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

loginAuth();

function enableButton() {
  const agreement = document.querySelector('#agreement');
  const button = document.querySelector('#submit-btn');

  agreement.addEventListener('click', () => {
    if (button.disabled === true) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
}

enableButton();

function textareaCounter() {
  const text = document.getElementById('textarea');
  const counter = document.getElementById('counter');

  text.addEventListener('keyup', () => {
    const characterLength = text.value.length;
    counter.setAttribute('value', (500-characterLength));
    counter.innerText = `${(counter.getAttribute('value'))}${'/500'}`;
  });
}

textareaCounter();
