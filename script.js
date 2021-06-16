const formButton = document.querySelector('.btn-submit');
const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');

function validadeHeaderForm() {
  const login = inputLogin.value;
  const senha = inputSenha.value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

formButton.addEventListener('click', validadeHeaderForm);

// window.onload = function() {
//   const satisfacao = document.querySelector('.form4');
//   for (let i = 1; i <= 10; i += 1) {
//     const markup = `<label for="rate-${i}">
//     <input type="radio" name="rate" id="rate-${i}" value="${i}">
//     ${i}
//   </label>`;
//     satisfacao.appendChild(markup);
//   }
// }