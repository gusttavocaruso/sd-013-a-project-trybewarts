const button = ;
const checkedStatus = document.getElementById('agreement');

// Requisito 3

// Requisito 18
function statusButton() {
  console.log(checkedStatus.checked);
  if (checkedStatus.checked === false) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
checkedStatus.addEventListener('click', statusButton);

// Requito 3
function submitButton(){
  const buttonSubmit =  document.getElementById('buttonSubmit');
  buttonSubmit.addEventListener('click', () => {
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  if (user.value === 'tryber@teste.com' && password.value === '123456'){
    alert('Olá, Tryber!');
  }
  if(user.value !== 'tryber@teste.com' || password.value !== '123456'){
    alert('Login ou senha inválidos.');
  }
  });
}
submitButton();
