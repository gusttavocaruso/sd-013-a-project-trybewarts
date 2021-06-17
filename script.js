const btnlogin = document.getElementById('btnLogin');
const bntAgreement = document.getElementById('agreement');
const bntTextarea = document.getElementById('textarea');

btnlogin.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com') {
    if (senha === '123456') {
      alert('Olá, Tryber!');
    }
  } else {
    alert('Login ou senha inválidos.');
  }
});

bntAgreement.addEventListener('click', (el) => {
  const bntSubmit = document.getElementById('submit-btn');
  bntSubmit.disabled = !el.target.checked;
});

bntTextarea.addEventListener('keyup', (el) => {
  let counter = document.getElementById('counter');
  counter.innerText = 500 - el.target.value.length
})
