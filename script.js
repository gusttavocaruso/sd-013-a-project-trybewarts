const formButton = document.querySelector('.btn-submit');
const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');

function validadeHeaderForm() {
  const login = inputLogin.value;
  const senha = inputSenha.value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

formButton.addEventListener('click', validadeHeaderForm);

function validateBtn() {
  const btn = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled');
    }
  });
}

const textarea = document.querySelector('#textarea');
const spanContador = document.querySelector('#counter');

function limiteTextarea() {
  const quant = 500;
  let contador = 0;
  spanContador.innerHTML = quant;
  console.log(spanContador);

  textarea.addEventListener('keyup', () => {
    const textLength = textarea.value.length;
    contador = quant - textLength;
    console.log(contador);
    spanContador.innerHTML = contador;
  });
}

window.onload = () => {
  validateBtn();
  limiteTextarea();
};
