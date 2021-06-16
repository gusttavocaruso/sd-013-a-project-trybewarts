const formLogin = document.forms[0];

function handleFormSubmission(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const login = formData.get('login');
  const password = formData.get('password');

  let msg = 'Olá, Tryber!';
  if (login !== 'tryber@teste.com' || password !== '123456') msg = 'Login ou senha inválidos.';
  alert(msg);
}

window.onload = () => {
  formLogin.addEventListener('submit', handleFormSubmission);
};
