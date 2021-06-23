function validationLogin() {
  const getInputLogin = document.getElementById('input-login');
  const getInputSenha = document.getElementById('input-senha');
  const getButtonLogin = document.getElementById('button-login');

  getButtonLogin.addEventListener('click', () => {
    if (getInputLogin.value === 'tryber@teste.com' && getInputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
} validationLogin();

// Criação de labels contendo radio inputs.
function rateRank() {
  const rateNumber = document.getElementById('rate-numbers');
  for (let i = 1; i <= 10; i += 1) {
    const labelElement = document.createElement('label');
    labelElement.classList.add('label-rate-numbers');
    labelElement.innerText = i;
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'rate';
    radioInput.value = i.toString();
    labelElement.appendChild(radioInput);
    rateNumber.appendChild(labelElement);
  }
}
rateRank();

// Cria contador com valor maximo de 500 caracteres.
function characterCounter() {
  const counterElement = document.getElementById('counter');
  const textareaElement = document.getElementById('textarea');
  counterElement.innerText = 500;
  textareaElement.addEventListener('keyup', () => {
    const decreaseNumber = textareaElement.value.length;
    counterElement.innerText = 500 - decreaseNumber;
  });
}
characterCounter();

function alteraAtributo() {
  const checkbox = document.getElementById('agreement');

  checkbox.addEventListener('click', () => {
    const buttonDisabled = document.getElementById('submit-btn');
    buttonDisabled.removeAttribute('disabled');
  });
}alteraAtributo();

// Cria resultado do formulario
