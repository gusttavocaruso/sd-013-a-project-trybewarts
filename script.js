const login = document.getElementById('login');
const password = document.getElementById('password');

function validar(){
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
  return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}
