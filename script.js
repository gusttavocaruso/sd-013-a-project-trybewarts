/* validação de form loguin  */
let email = document.getElementById('email-input');
let senha = document.getElementById('senha-input');

let botao = document.getElementById('btn');
botao.addEventListener ('click', validationLogin);

function validationLogin(){
  if (email.value === 'tryber@teste.com' && senha.value === '123456'){ 
    alert('Olá, Tryber!')
  } else { 
    alert('Login ou senha inválidos.')}
}


