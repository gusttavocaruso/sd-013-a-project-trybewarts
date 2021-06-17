const desafio3 = () => {
  let login = document.querySelector('#login');
  let senha = document.querySelector('#senha');

    if((login.value !== 'tryber@teste.com' ) && (senha.value !== '123456')) {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
}

window.onload = () => {
  let btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click',desafio3);
}

