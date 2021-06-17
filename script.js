// Requisito 18
const checkedStatus = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
function statusButton() {
  console.log(checkedStatus.checked);
  if (checkedStatus.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
checkedStatus.addEventListener('click', statusButton);

// Requito 3
function submitButton() {
  const buttonSubmit = document.getElementById('buttonSubmit');
  buttonSubmit.addEventListener('click', () => {
    const user = document.getElementById('user');
    const password = document.getElementById('password');
    if (user.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    }
    if (user.value !== 'tryber@teste.com' || password.value !== '123456') {
      alert('Login ou senha inválidos.');
    }
  });
}
submitButton();
