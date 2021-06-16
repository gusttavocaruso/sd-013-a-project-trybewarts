
let btnLogin = document.getElementById("btnlogin");
let inputLogin = document.getElementById("login")
let inputSenha = document.getElementById("senha")


btnLogin.addEventListener("click", () => {
  if(inputLogin.value === 'tryber@teste.com' || inputSenha.value === '123456'){
    alert("Olá, Tryber!");
    }else {
      alert("Login ou senha inválidos.");
    }
});


// buttonEntrar.addEventListener('click', () => {
//   if (login.value === 'tryber@teste.com' && password.value === '123456') {
//     alert('Olá, Tryber!');
//   } else {
//     alert('Login ou senha inválidos.');
//   }
// });