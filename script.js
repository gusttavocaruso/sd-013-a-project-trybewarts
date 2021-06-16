const botaoEntrar = document.querySelector('.botao-entrar');
let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('password');

botaoEntrar.addEventListener('click', function (event) {
  event.preventDefault();

  if(inputEmail == 'tryber@teste.com' && inputSenha === 123456) {
    alert('Olá, Tryber!')
  }
  alert('Login ou senha inválidos.')
});