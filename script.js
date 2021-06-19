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

// debugger;

function fnFillArrayRefSubjectSelected() {
  // Materias selecionadas
  const arrSubject = [];
  const elAllSubject = document.querySelectorAll('.subject');
  for (let index = 0; index < elAllSubject.length; index += 1) {
    if (elAllSubject[index].checked) {
      arrSubject.push(` ${elAllSubject[index].value}`);
    }
  }
  return arrSubject;
}

// ========================================================
// Source: https://stackoverflow.com/questions/6533138/javascript-selected-radio/56091858

function getCheckedRadioValue(name) {
  const elements = document.getElementsByName(name);
  for (let i = 0; i <= elements.length; i += 1) {
    if (elements[i].checked) return elements[i].value;
  }
}
// =========================================================

// const strName = document.querySelector('#input-name').value;
// const strLastName = document.querySelector('#input-lastname').value;
// const strEmail = document.querySelector('#input-email').value;
// const strHouse = document.querySelector('#house').value;

function fnBuildReport() {
  const formEvaluation = document.querySelector('#evaluation-form');
  const strfamily = getCheckedRadioValue('family');
  const arrSubjects = fnFillArrayRefSubjectSelected();
  const intRate = getCheckedRadioValue('rate');
  const strTextarea = document.querySelector('#textarea').value;
  const objReport = {
    name: `Nome: ${formEvaluation[0].value} ${formEvaluation[1].value}`,
    email: `Email: ${formEvaluation[2].value}`,
    house: `Casa: ${formEvaluation[3].value}`,
    family: `Família: ${strfamily}`,
    subject: `Matérias: ${Object.values(arrSubjects)}`,
    rate: `Avaliação: ${intRate}`,
    comment: `Observações: ${strTextarea}`,
  };
  const strReport = `${Object.values(objReport)}`;
  return strReport;
}

function fnAppendReport() {
  const elReport = document.createElement('div');
  elReport.innerHTML = fnBuildReport();
  const divReport = document.querySelector('#output-report');
  divReport.appendChild(elReport);
}

function handleSubmit(evt) {
  evt.preventDefault();
  fnAppendReport();
}

const btnSubmit = document.querySelector('#submit-btn');

btnSubmit.addEventListener('click', handleSubmit);

// for (let subject of elAllSubject) {
//   if (subject.checked) {
//     arrSubject.push(subject.checked.value);
//   }
// }

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

// Deprecated ===================================================
// Declaração e criacao da div que ficara abaixo do text area
// let intMaxLengthComent = document.createElement('div');
// intMaxLengthComent.id = 'counter';
// intMaxLengthComent.innerHTML = '500';
// Appendando abaixo do textarea
// elemTextAreaForComent.append(intMaxLengthComent);
// ==============================================================
const elemTextAreaForComent = document.querySelector('#textarea');
const elemToShowIntoTextArea = document.querySelector('#counter');

elemTextAreaForComent.addEventListener('keyup', (evt) => {
  const intMaxCaracteres = 500;
  const intTotalCaracteresInTextArea = evt.target.value.length;
  const intBalance = (intMaxCaracteres - intTotalCaracteresInTextArea);
  // const strText = evt.target.innerHtml;
  elemToShowIntoTextArea.innerHTML = intBalance;
  // evt.target.innerHtml = `${strText} ${intBalance}`;
});
