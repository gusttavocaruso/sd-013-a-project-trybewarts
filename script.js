// 3 - Acrescente um formulário de autenticação no canto direito da barra superior contendo os inputs de login, de senha e um botão de entrar
function tryLogin() {
  const login = document.getElementById('login').value;
  const pwd = document.getElementById('pwd').value;
  if ((login === 'tryber@teste.com') && (pwd === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', tryLogin, false);

// 18.  Faz com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada
function enableButton() {
  const agreement = document.querySelector('#agreement');
  const button = document.querySelector('#submit-btn');

  agreement.addEventListener('click', () => {
    if (button.disabled === true) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
}

enableButton();

// 20. Adiciona contador ao textarea para contador do textarea
function textareaCounter() {
  const text = document.getElementById('textarea');
  const counter = document.getElementById('counter');

  text.addEventListener('keyup', () => {
    const characterLength = text.value.length;
    counter.setAttribute('value', (500 - characterLength));
    counter.innerText = `${(counter.getAttribute('value'))}${'/500'}`;
  });
}

textareaCounter();
