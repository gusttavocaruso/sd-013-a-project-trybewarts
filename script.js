const buttonHeader = document.getElementById('button-submit-header');
const inputLogin = document.getElementById('login-input');
const inputSenha = document.getElementById('senha-input');
buttonHeader.addEventListener('click', verificarFormHeader);
<<<<<<< HEAD
function verificarFormHeader() {
    const login = inputLogin.value;
    const senha = inputSenha.value;
    if (senha === "123456" & login === "tryber@teste.com") {
      alert("Olá, Tryber!");
    } else {
      alert("Login ou senha inválidos");
    }
}
=======

function verificarFormHeader() { 
	  const login = inputLogin.value;
	  const senha = inputSenha.value;
  	if (senha === "123456" & login === "tryber@teste.com") {
		  alert("Olá, Tryber!");
	  } else {
		  alert("Login ou senha inválidos");
  	}
}
>>>>>>> a78a2078578744c1d9c1b53dad91d1913299d297
