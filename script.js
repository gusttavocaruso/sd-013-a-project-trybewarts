function verificacao() {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');

  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

document.getElementById('botao-login').addEventListener('click', verificacao);

const submit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
submit.disabled = true;

function check() {
  if (checkbox.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

checkbox.addEventListener('click', check);


const tamTex = document.querySelector("#textarea")
function ta(){
let test = tamTex.value.length;
let divText = document.querySelector("#counter")
divText.innerHTML = 500-test
}
ta()
tamTex.addEventListener("keyup",ta)


