window.onload = function () {   
    let login = document.querySelector("input[name=login");
    let senha = document.querySelector("input[name=senha");
    let pressButton = document.querySelector("button[name=button");
    pressButton.addEventListener("click", ()=>{
        if (login.value == "tryber@teste.com" && senha.value == "123456"){
            alert("Olá, Tryber!");
        }
        else {
            alert("Login ou senha inválidos.");
        }
    })    
}