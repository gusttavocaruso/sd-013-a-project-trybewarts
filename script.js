// função responsavel pelo requisito numero 3
let logBtn = document.getElementById('log-btn');

logBtn.addEventListener('click', function funcaoLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
