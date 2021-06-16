const botaoEntrar = document.querySelector('.botao-entrar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');

botaoEntrar.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Login ou senha inválidos.');
});
