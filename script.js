


function validaEmail(event){
 
 let login = document.querySelector("#login").value;
 let senha = document.querySelector("#senha").value;
 if(login === "tryber@teste.com" && senha === "123456"){
    alert("Olá, Tryber!");
 }
 else{
   alert("Login ou senha inválidos.");
 }


}
let botaoLogin = document.querySelector("#botao-login");
 botaoLogin.addEventListener("click" , validaEmail);