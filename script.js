const email = document.querySelector('.login');
const password = document.querySelector('.senha');
const bntLogin = document.querySelector('#buttonLogin');
const btnSubmit = document.getElementById('submit-btn');
const cBox = document.getElementById('agreement');

bntLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function agreementChecked() {
  if (cBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

cBox.addEventListener('click', agreementChecked);
