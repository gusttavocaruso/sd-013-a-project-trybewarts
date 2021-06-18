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

// Funcionalidade de clicar e substituir informações
/*function saveCheckBox() {
  const checkedBoxes = [];
  const checkbox = document.querySelectorAll('input[type=checkbox]:checked');

  for (let i = 0; i < checkbox.lenght - 1; i += 1) {
    checkedBoxes.push(checkbox[i].value);
  }

  return checkedBoxes;
}

function saveRadio() {
  const families = document.getElementByName('family');
  let famiglia;

  for (let i = 0; i < families.lenght; i += 1) {
    if (families[i].checkbox) {
      famiglia = families[i].value;
    }
  }

  return famiglia;
}

function saveValidation() {
  const rating = document.getElementByName('rate');
  let rate;

  for (let i = 0; i < rating.lenght; i += 1) {
    if (rating[i].checkbox) {
      rate = rating[i].value;
    }
  }

  return rate;
}

const name = document.getElementById('input-name').value;
const lastname = document.getElementById('input-lastname').value;
const email = document.getElementById('input-email').value;
const house = document.getElementById('house').value;
const obs = document.getElementById('textarea').value;
const subjectSelec = saveCheckBox();
const fmlySelec = saveRadio();
const valSelec = saveValidation();

sessionStorage.setItem('nome', name);
sessionStorage.setItem('sobrenome', lastname);
sessionStorage.setItem('email', email);
sessionStorage.setItem('casa', house);
sessionStorage.setItem('materia', subjectSelec);
sessionStorage.setItem('familia', fmlySelec);
sessionStorage.setItem('avaliacao', valSelec);
sessionStorage.setItem('obs', obs);

function applySavedData() {
  document.getElementById('input-name').innerHTML = name;
  document.getElementById('input-lastname').innerHTML = lastname;
  document.getElementById('input-email').innerHTML = email;
  document.getElementById('house').innerHTML = house;
  document.getElementById('checkbox-content').innterHTML = subjectSelec;
  document.getElementById('label-family').innerHTML = fmlySelec;
  document.getElementById('label-rate').innerHTML = valSelec;
  document.getElementById('textarea').innerHTML = obs;
}

document.getElementById('submit-btn').addEventListener('click', applySavedData);
