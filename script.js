let buttonHeader = document.getElementById("button-submit-header");
let inputLogin = document.getElementById("login-input");
let inputSenha = document.getElementById("senha-input");
buttonHeader.addEventListener("click", verificarFormHeader);

function verificarFormHeader() { 
	let login = inputLogin.value;
	let senha = inputSenha.value;
	if (senha == "123456" & login == "tryber@teste.com") {
		alert("Olá, Tryber!");
	} else {
		alert("Login ou senha inválidos");
	}
}