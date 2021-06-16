/* Variaveis */
let btnLogin = document.getElementById("btnlogin");
let inputLogin = document.getElementById("login")
let inputSenha = document.getElementById("senha")

/* função validar login */
btnLogin.addEventListener("click", () => {
  if(inputLogin.value === 'tryber@teste.com' || inputSenha.value === '123456'){
    alert("Olá, Tryber!");
    }else {
      alert("Login ou senha inválidos.");
    }
});