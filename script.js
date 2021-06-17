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

// function req14 () { 
//   for (let i = 0; i < 10; i +=1) {
//     let inputs = document.querySelector('.req14');

//     let checkbox = document.createElement('input');
//     checkbox.value = [i];
//     checkbox.rate = 'rate';
//     checkbox.type = 'radio';
//     inputs.appendChild('checkbox');

//   }
// }

// req14();

