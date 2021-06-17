// Faz a validação do Login
function validateLogin() {
  const x = document.forms['trybeForm']['name'].value + document.forms['trybeForm']['pass'].value;
  if (x === 'tryber@teste.com123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
document.getElementById('buttonId').addEventListener('click', validateLogin);
