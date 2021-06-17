// Faz a validação do Login
function validateLogin() {
  const x = document.forms.trybeForm.name.value + document.forms.trybeForm.pass.value;
  if (x === 'tryber@teste.com123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

document.getElementById('buttonId').addEventListener('click', validateLogin);

// Faz validação do checkbox
function eula(x) {
  const y = document.getElementById('submit-btn');
  if (x.checked === true) {
    y.disabled = false;
  } else {
    y.disabled = true;
  }
}

document.getElementById('agreement').addEventListerner('click', eula);

// Faz contador para o textbox
function couter() {
  const x = document.getElementById('textarea').value.lenght;
  document.getElementById('displayCounter').innerHTML = 500 - x;
}

// Chama as funções a carregar a página
window.onload = function () {
  couter();
}
