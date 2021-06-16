window.onload = function () {
  const login = document.querySelector('input[name=login');
  const senha = document.querySelector('input[name=senha');
  const pressButton = document.querySelector('button[name=button');
  pressButton.addEventListener('click', () => {
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
};
