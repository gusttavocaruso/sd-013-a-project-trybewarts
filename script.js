const loginButton = document.querySelector('.login-button');

function submitLogin() {
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const senha = document.querySelector('#senha-usuario');
    const login = document.querySelector('#login-usuario');
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

submitLogin();

// const submitButton = document.querySelector('#submit-btn')
// submitButton.disabled = true;
// submitButton.classList.add('disable');

const submitButton = document.querySelector('#submit-btn');
const input = document.querySelector('#agreement');
function prevent() {
  submitButton.disabled = true;
  input.addEventListener('click', () => {
    if (input.checked) {
      submitButton.disabled = false;
    }
  });
}

function textAreaCounter() {
  const textarea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  counter.innerText = 500;

  textarea.addEventListener('keyup', () => {
    const characters = textarea.value.length;
    counter.innerText = 500 - characters;
  });
}

prevent();
textAreaCounter();
