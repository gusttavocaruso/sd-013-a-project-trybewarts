// Validação login
// function validateLogin() { 
//   let x = document.forms["trybeForm"]["name"].value; 
//   let y = document.forms["trybeForm"]["pass"].value;
//   if (x === 'tryber@teste.com' && y === "123456") { 
//       alert("Olá, Tryber!")
//     }
//     else {
//       alert("Login ou senha inválidos.");
//     }
// } 
// document.getElementById("buttonId").addEventListener("click", validateLogin);

function validateLogin(event) { 
  let x = document.forms["trybeForm"]["name"].value + document.forms["trybeForm"]["pass"].value;
  console.log(document.getElementById("buttonId"));
  if (x === "tryber@teste.com123456") { 
    alert("Olá, Tryber!"); 
  } else { 
    alert("Login ou senha inválidos."); 
  }
  event.preventDefault(); 
} 
document.getElementById("buttonId").addEventListener("click", validateLogin);