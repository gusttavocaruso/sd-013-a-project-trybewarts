// Alteração para commit final
const submitBtn = document.getElementById('submit-btn');
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
// Referência: https://thisinterestsme.com/disable-button-checkbox-checked/  - Utilizada para base e entendimento
function eula(event) {
  if (event.target.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', eula);

// Faz contador para o textbox
// Referência: https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea - Utilizada para base e entendimento

function limiteTextarea(event) {
  const quant = 500;
  const total = event.target.value.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = 0;
  }
}

document.getElementById('textarea').addEventListener('keyup', limiteTextarea);
