function checkLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

document.getElementsByClassName('btn-login')[0].addEventListener('click', checkLogin);

function checkForm(event) {
  const input = document.getElementById('agreement');
  if (!input.checked) {
    event.preventDefault();
  }
}
document.getElementById('submit-btn').addEventListener('click', checkForm);

function activeButton(event) {
  const btn = document.getElementById('submit-btn');
  if (event.target.checked) {
    console.log('entrou');
    btn.style.backgroundColor = 'indigo';
    btn.disabled = false;
    console.log(btn.disabled);
  } else {
    btn.style.backgroundColor = 'rgb(161, 159, 159)';
    btn.disabled = true;
    console.log(btn.disabled);
  }
}

document.getElementById('agreement').addEventListener('change', activeButton);
