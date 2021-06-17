
function checkLogin() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  if (login === "tryber@teste.com" || senha === 123456) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

function buttonOn() {
  const button = document.getElementById("submit-btn")
  
  button.disabled = false
  
}
