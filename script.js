// Requisito 3
const desafio3 = () => {
  let login = document.querySelector('#login');
  let senha = document.querySelector('#senha');
  let btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click',() => {
    if((login.value !== 'tryber@teste.com' ) && (senha.value !== '123456')) {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}


desafio3();

