const ok = document.querySelector("#login");

function req3() {

  const login = document.querySelector("#login");
  const senha = document.querySelector("#senha");

    if(login.value === "tryber@teste.com" && senha.value === "123456"){
      alert("Olá, Tryber!");
    } else {
      alert("Login ou senha inválidos.");
    }
   
  }

addEventListener('submit',req3);


