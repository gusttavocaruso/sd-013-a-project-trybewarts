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
comments.addEventListener("keydown", function () {
  counter.innerText = 500 - this.value.length;
});

// ENVIAR CONTEÚDOS DO FORMULÁRIO
