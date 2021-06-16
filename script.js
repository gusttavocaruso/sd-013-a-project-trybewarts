const buttonHeader = document.getElementById('button-submit-header');
const inputLogin = document.getElementById('login-input');
const inputSenha = document.getElementById('senha-input');
buttonHeader.addEventListener('click', verificarFormHeader);

function verificarFormHeader() {
    const login = inputLogin.value;
    const senha = inputSenha.value;
    if (senha === "123456" & login === "tryber@teste.com") {
      alert("Olá, Tryber!");
    } else {
      alert("Login ou senha inválidos.");
    }
}
