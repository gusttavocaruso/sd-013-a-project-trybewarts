const botao = document.querySelector('.botao');
const senha = document.getElementById('senha');
const login = document.getElementById('login');
const submitBtn = document.getElementById('submit-btn');

function loginOk() {
  if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
botao.addEventListener('click', loginOk);



// function verifyAgreement() {
//   const checkbox = document.querySelector('#agreement');
//   const submitButton = document.querySelector('#submit-btn');

//   checkbox.addEventListener('input', () => {
//     const disabled = submitButton.hasAttribute('disabled');
//     if (disabled) submitButton.removeAttribute('disabled');
//   });
// }

// verifyAgreement();



function test() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('click', test);
console.log()