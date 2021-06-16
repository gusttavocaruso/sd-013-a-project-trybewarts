const inpuLogin = document.querySelector('#input-login');
const inpuSenha = document.querySelector('#input-senha');
const buttonEnviar = document.querySelector('#button-enviar');

function VerificaLogin() {
  const login = inpuLogin.value;
  const senha = inpuSenha.value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonEnviar.addEventListener('click', VerificaLogin);
