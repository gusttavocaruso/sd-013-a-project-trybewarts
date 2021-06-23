const log = document.querySelector('#button-logar');
function loginCorreto() {
  const login = document.querySelector('.login-value').value;
  const pass = document.querySelector('.pass-value').value;
  if ((login === 'tryber@teste.com') && (pass === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
log.addEventListener('click', loginCorreto);

const enviar = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
checkBox.onChange = function testb() {
  if (this.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
};
