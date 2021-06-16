const getButton = document.getElementById('btn-enter');
const getLogin =  document.getElementById('input-login');
const getSenha =  document.getElementById('input-password');
const login = 'tryber@teste.com';
const senha = '123456';

getButton.addEventListener('click', () => {
  if ( (getLogin.value !== login) && (getSenha.value !== senha)) {
    alert ('Login ou senha inválidos.');
  } else {
    alert ('Login efetuado!')
  }
})
