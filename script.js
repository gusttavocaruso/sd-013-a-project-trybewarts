const buttonHeader = document.getElementById('button-submit-header');
const inputLogin = document.getElementById('login-input');
const inputSenha = document.getElementById('senha-input');
buttonHeader.addEventListener('click', verificarFormHeader);

function verificarFormHeader() {
    const login = inputLogin.value;
    const senha = inputSenha.value;
    if ((senha === "123456") && (login === "tryber@teste.com")) {
      alert("Olá, Tryber!");
    } else {
      alert("Login ou senha inválidos.");
    }
}

document.getElementById("submit-btn").disabled = true;
document.getElementById("agreement").addEventListener("input", function(event){
    var conteudo = document.getElementById("agreement").value;
    if (conteudo !== null && conteudo !== '') {
      document.getElementById("submit-btn").disabled = false;
    } else {
      document.getElementById("submit-btn").disabled = true;
    }
});