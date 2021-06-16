function validationLogin () {
  const getInputLogin = document.getElementById('input-login');
  const getInputSenha = document.getElementById('input-senha');
  const getButtonLogin = document.getElementById('button-login');

  getButtonLogin.addEventListener('click', () => {
    if (getInputLogin.value === 'tryber@teste.com' && getInputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });  
}validationLogin();
