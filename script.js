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

/* function limite_textarea(valor) {
  quant = 50;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById('cont').innerHTML = resto;
  } else {
      document.getElementById('texto').value = valor.substr(0,quant);
  }
} */
