const botaoLogar = document.getElementById('logar');
const login = document.getElementById('login');
const password = document.getElementById('password');

botaoLogar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
});

const checker = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');

function ativar() {
  if (checker.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
}

ativar();

const textArea = document.querySelector('#textarea');
const counter = document.getElementById('counter');

textArea.onkeyup = function piak() {
  counter.innerHTML = `${500 - this.value.length} restantes`;
};

const nome = document.getElementById("input-name");
const sobrenome = document.getElementById("input-lastname");
const email = document.getElementById("input-email");
const casas = document.getElementById("house");
const familias = document.querySelectorAll(".inputsFamilia");
const conteudos = document.querySelectorAll(".subject");
const nota = document.querySelectorAll(".inputsNota");

function verificarNome () {
  return nome.value;
}

function verificarSobrenome () {
  return sobrenome.value;
}

function verificarEmail () {
  return email.value;
}

function verificarFamilia () {
  for (let i = 0 ; i < familias.length ; i += 1 ) {
    if (familias[i].checked) {
      return familias[i].value;
    }
  }
}

function verificarCasa () {
  for (let i = 0 ; i < casas.length ; i += 1 ) {
    if (casas[i].checked) {
      return casas[i].value;
    }
  }
}

function verificarNota () {
  for (let i = 0 ; i < nota.length ; i += 1 ) {
    if (nota[i].checked) {
      return nota[i].value;
    }
  }
}

function verificarConteudo () {
  for (let i = 0 ; i < conteudos.length ; i += 1 ) {
    if (conteudos[i].checked) {
      return conteudos[i].value;
    }
  }
}

function trocarInputs () { 
  const form = document.getElementsByTagName('form'); 
  const familySelected = verificarFamilia(); 
  const verificarConteudo = verificarConteudo(); 
  const rateSelected = evaluationNps();
  const verificarNome = verificarNome();
  const verificarSobrenome = verificarSobrenome();
  const verificarEmail = verificarEmail() 
  const verificarCasa = verificarCasa();
  const verificarNota = verificarNota();
  
  form.innerHTML = ''; 
  form.innerHTML += `Nome: ${verificarNome} ${verificarSobrenome}`; 
  form.innerHTML += `Email: ${verificarEmail}`; 
  form.innerHTML += `Casa: ${verificarCasa}`; 
  form.innerHTML += `Familia: ${familySelected}`; 
  form.innerHTML += `Conteúdos: ${verificarConteudo}`; 
  form.innerHTML += `NPS: ${verificarNota}` 
}

sendbtn.addEventListener("click",trocarInputs)
