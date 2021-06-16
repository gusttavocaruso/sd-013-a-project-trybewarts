let botaoLogin = document.querySelector("#botaoLogin");

function verificaLogin() {
  let campoUser = document.querySelector("#email").value;
  let campoSenha = document.querySelector("#senha").value;
  if ((campoUser !== "tryber@teste.com") || (campoSenha != "123456")) {
    window.alert("Login ou senha inválidos.");
  } else {
    window.alert("Olá, Tryber!");
  }
}

botaoLogin.addEventListener("click", verificaLogin);
