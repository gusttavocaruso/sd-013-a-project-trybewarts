const buttonL = document.getElementById('entrar-button');

buttonL.addEventListener('click', (e) => {
  e.preventDefault();
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

var btn = document.getElementById("submit-btn");
var agree = document.getElementById("agreement");

agree.addEventListener("change", function (event) {
  if (event.target.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}, false);







/*window.onload = function () {
  const btn = document.getElementById('submit-btn');
  btn.disable = true
}

let input = document.getElementById('agreement');
let btn = document.getElementById('submit-btn');
btn.disable = true;
agreement.addEventListener('change', stateHandle);
function stateHandle() {
  if (input.value == "") {
    btn.disable = true;
  } else {
    btn.disable = false;
  }*/