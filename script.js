
function checkLogin() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  console.log(login);
  console.log(senha);

  if (login === "tryber@teste.com" || senha === 123456) {
    alert("Olá, Tryber!");
    console.log(login);
    console.log(senha);
  } else {
    alert("Login ou senha inválidos.");
    console.log(login);
    console.log(senha);
  }
}

