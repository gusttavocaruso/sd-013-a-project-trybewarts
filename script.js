const botaoLogar = document.querySelector('.logar');
const btnSubmit = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');
const textArea = document.getElementById('textarea');

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

textArea.addEventListener('keyup', (contagem) => {
  const contador = document.getElementById('counter');
  contador.innerText = 500 - contagem.target.value.length;
});
