let formButton = document.querySelector('.btn-submit');
let inputLogin = document.querySelector('#login');
let inputSenha = document.querySelector('#senha');

function validadeHeaderForm() {
  let login = inputLogin.value;
  let senha = inputSenha.value;

  if (login === "tryber@teste.com" && senha === "123456") {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

formButton.addEventListener('click', validadeHeaderForm);


