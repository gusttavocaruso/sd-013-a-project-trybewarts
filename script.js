const getBtnLogin = document.querySelector('#btn-login');
const submitbtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

getBtnLogin.addEventListener('click', () => {
  const getInputLogin = document.querySelector('#input-login');
  const getInputSenha = document.querySelector('#input-senha');
  if ((getInputLogin.value) !== 'tryber@teste.com' || (getInputSenha.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// codigo referenciado (https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button)
// faz o botao ser habilitado com o checkbox
submitbtn.disabled = true;
agreement.addEventListener('click', () => {
  submitbtn.disabled = !submitbtn.disabled;
});
