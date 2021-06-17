const btnForm = document.getElementById('btn');
const loginBtn = document.getElementById('loginBtn');
const senhaBtn = document.getElementById('senhaBtn');
const email = 'tryber@teste.com';
const senha = '123456';
btnForm.addEventListener('click', () => {
  if ((loginBtn.value !== email) || (senhaBtn.value !== senha)) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
