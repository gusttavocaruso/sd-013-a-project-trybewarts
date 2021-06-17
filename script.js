const login = document.getElementById('login');
const senha = document.getElementById('senha');
const buttonLogin = document.getElementById('buttonLogin');

function validation() {
  if ((login.value !== 'tryber@teste.com') && (senha.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

buttonLogin.addEventListener('click', validation);

// Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada
// Fonte: https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20

const button = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
button.disabled = true;

function submit() {
  if (checkbox.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

button.addEventListener('click', submit);
checkbox.addEventListener('click', submit);

// Crie um contador com o ID 'counter' contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, 
// que deverá ser atualizado a medida que algo for digitado na textarea

const quant = 500;
const textArea = document.getElementById('comment');

function limiteTextArea() {
  const span = document.getElementById('counter');
  const textArea1 = document.getElementById('comment');
  const total = textArea1.value.length;
  const contador = quant - total;
  span.innerText = contador;
}

textArea.addEventListener('input', limiteTextArea);
