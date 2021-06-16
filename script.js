const email = document.querySelector('.login');
const password = document.querySelector('.senha');
const bntLogin = document.querySelector('#buttonLogin');

bntLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else { 
    alert('Login ou senha inválidos.');
  }
});
