let loginBtn = document.getElementById("login-btn");

let login = document.getElementById("login");

let senha = document.getElementById("senha");

loginBtn.addEventListener("click", function() {
  if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.")
  }
})