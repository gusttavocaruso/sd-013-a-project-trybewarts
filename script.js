const botaoLogar = document.querySelector('.logar');

botaoLogar.addEventListener('click', () => {
  const loginDigitado = document.querySelector('.login').value;
  const senhaDigitada = document.querySelector('.senha').value;
  if (loginDigitado === 'tryber@teste.com'
  && senhaDigitada === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// const formEvaluation = document.querySelector('#evaluation-form');

const btnSubmit = document.querySelector('#submit-btn');

const checkAgreement = document.querySelector('#agreement');

window.onload = () => {
  btnSubmit.disabled = true;
};

function enableSubmit() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
checkAgreement.addEventListener('click', enableSubmit);

// btnSubmit.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   const checkAgreement = document.querySelector('#agreement').checked;
//   if (checkAgreement) {
//     formEvaluation.submit();
//   } else {
//     alert('O aceite referente ao uso dos dados é obrigatório');
//   }
// });
