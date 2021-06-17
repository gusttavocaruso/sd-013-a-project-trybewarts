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
window.onload = () => {
  validateBtn();
};
