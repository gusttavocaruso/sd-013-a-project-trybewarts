function check() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const emailDefault = 'tryber@teste.com';
  const senhaDefault = '123456';

  if ( login === emailDefault && senha === senhaDefault) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const botao = document.getElementById('botao');
botao.addEventListener('click', check);
