
  const login = document.querySelector('.login');
  const senha = document.querySelector('.senha');
  const logar = document.querySelector('.btn-logar');
    logar.addEventListener('click', () => {
      if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
        alert('Login ou senha inválidos.');
      } else {
        alert('Olá, Tryber!');
      }
    })


