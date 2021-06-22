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

function name1() {
  const nome = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  nome.innerHTML = `Nome: ${nome.value} ${lastName.value}`;
}
function email1() {
  const email = document.getElementById('input-email');
  email.innerHTML = `Email: ${email.value}`;
}
function house1() {
  const house = document.getElementById('house');
  house.innerHTML = house.options[house.selectedIndex].text;
}
function comentario1() {
  const comentario = document.getElementById('textarea');
  comentario.innerHTML = `Observações: ${comentario.value}`;
}
function materia3(checked, textCheck, checkBox, index) {
  if (index <= checked) {
    textCheck.innerHTML += `${checkBox[index].value}, `;
  } else {
    textCheck.innerHTML += `${checkBox[index].value}`;
  }
}
function materia2(checked, textCheck, checkBox) {
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) {
      materia3(checked, textCheck, checkBox, index);
    }
  }
}
function materia1() {
  const checkBox = document.getElementsByClassName('subject');
  const textCheck = document.getElementById('aaa');
  textCheck.innerHTML = 'Matérias: ';
  let checked = 0;
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) {
      checked += 1;
    }
  }
  materia2(checked, textCheck, checkBox);
}
function familia1() {
  const familia = document.querySelector('input[name=family]:checked');
  const textFamilia = document.getElementById('familia');
  textFamilia.innerHTML = `Família: ${familia.value}`;
}
function avaliacao1() {
  const avaliacao = document.querySelector('input[name=rate]:checked');
  const textAvaliacao = document.getElementById('avaliacao');
  textAvaliacao.innerHTML = `Avaliação: ${avaliacao.value}`;
}
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  name1();
  email1();
  house1();
  comentario1();
  materia1();
  familia1();
  avaliacao1();
});
