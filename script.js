    //desafio 3= validar Email e Senha.
    let senha1 = document.getElementById("senha");
    let login1 = document.getElementById('login');
    let button = document.getElementById("button-logar");

 button.addEventListener("click", ()=> {
 if (senha1.value == "123456" && login1.value == "tryber@teste.com") {
    alert ("Olá, Tryber!");
 } else {
    alert ("Login ou senha inválidos.");
 }
 });

