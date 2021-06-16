let btnLogar = document.querySelector("#btn-logar");
let txtLogin = document.querySelector("#login");
let txtSenha = document.querySelector("#senha");

btnLogar.addEventListener("click", function() {
    if (txtLogin.value === "tryber@teste.com" && txtSenha.value === "123456") {
        alert("Olá Tryber!")
    } else {
        alert("Login ou senha inválidos")
    }
});


