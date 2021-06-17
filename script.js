// REALIZA A VERIFICAÇÃO DO LOGIN E SENHA
let loginBtn = document.getElementById("login-btn");

let login = document.getElementById("login");

let senha = document.getElementById("senha");

loginBtn.addEventListener("click", function () {
  if (login.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
});

// REALIZA A VERIFICAÇÃO DO CHECKBOX PARA HABILITAR O BOTÃO ENVIAR
let checkedAgreement = document.getElementById("agreement");

checkedAgreement.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("submit-btn").removeAttribute("disabled");
  } else {
    document.getElementById("submit-btn").setAttribute("disabled", "");
  }
});

// CONTADOR TEXTAREA
let comments = document.getElementById("textarea");

let counter = document.getElementById("counter");
comments.addEventListener("keyup", function () {
  counter.innerText = 500 - this.value.length;
});

// ENVIAR CONTEÚDOS DO FORMULÁRIO
let submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', function() {
  let evaluationForm = document.getElementById('evaluation-form');
  let name = document.getElementById('input-name');
  let lastName = document.getElementById('input-lastname');
  let email = document.getElementById("input-email");
  let house = document.getElementById("house");
  let family = document.querySelector('input[name="family"]:checked');
  let subjects = document.querySelectorAll('input[name="content"]:checked');
  let rate = document.querySelector('input[name="rate"]:checked');
  let comment = document.getElementById("textarea");

  let content = "";
  for (let i of subjects) {
    content += (i.value + ", ");
  }
  content = content.slice(0, -2);
  
  evaluationForm.innerHTML = "";
  let text = document.createElement('p');
  evaluationForm.appendChild(text);
  text.innerHTML = 
    'Nome: ' + name.value + ' ' + lastName.value + '<br/>' +
    'Email: ' + email.value + '<br/>' +
    'Casa: ' + house.value + '<br/>' +
    'Família: ' + family.value + '<br/>' +
    'Matérias: ' + content + '<br/>' +
    'Avaliação: ' + rate.value + '<br/>' +
    'Observações: ' + comment.value + '<br/>'
})