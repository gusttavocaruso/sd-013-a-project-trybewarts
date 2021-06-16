const getBtnLogin = document.querySelector('#btn-login');

getBtnLogin.addEventListener('click', function() {
  let getInputLogin = document.querySelector
  ('#input-login');
  let getInputSenha = document.querySelector('#input-senha');
  if (getInputLogin.value !== 'tryber@teste.com' || getInputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
})
