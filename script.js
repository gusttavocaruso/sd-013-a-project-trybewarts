const inputLogin = document.getElementById('input_login');
const inputPassw = document.getElementById('input_passw');
const loginBtn = document.getElementById('login_btn');

function verifyInputLogin() {
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const loginContent = inputLogin.value;
    const passwContent = inputPassw.value;
    if (loginContent === 'tryber@teste.com' && passwContent === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
verifyInputLogin();
