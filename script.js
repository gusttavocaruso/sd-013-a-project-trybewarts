let botaoLogar = document.querySelector('.logar');

botaoLogar.addEventListener('click', function(event) {
  const loginDigitado = document.querySelector('.login').value;
  const senhaDigitada = document.querySelector('.senha').value;
  if (loginDigitado == 'tryber@teste.com' 
  && senhaDigitada == '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.');
  };
})
