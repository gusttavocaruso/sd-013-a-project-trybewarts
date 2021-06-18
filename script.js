const login = document.querySelector('input[name=login');
const senha = document.querySelector('input[name=senha');
const pressButton = document.querySelector('button[name=button');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
submitBtn.disabled = true;
pressButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function test() {
  if (agreement.checked) {
    console.log('sim');
    submitBtn.disabled = false;
  } else {
    console.log('não');
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('click', test);

function contaChar(char) {
  const maxLength = 500;
  const valorDigi = char.length;
  let resto;
  const contador = document.getElementById('counter');
  if (maxLength >= valorDigi) {
    resto = maxLength - valorDigi;
    contador.innerHTML = resto;
  }
}
contaChar('');
