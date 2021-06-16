const getBtnLogin = document.querySelector('#btn-login');

getBtnLogin.addEventListener('click', () => {
  const getInputLogin = document.querySelector('#input-login');
  const getInputSenha = document.querySelector('#input-senha');
  if (getInputLogin.value !== 'tryber@teste.com' || getInputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
