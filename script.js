const getEmailInput = document.querySelector('#email');
const getPasswordInput = document.querySelector('#password');
const getLoginButton = document.querySelector('#input-login-button');

const loginValidator = () => {
  if (getEmailInput.value === 'tryber@teste.com' && getPasswordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
};
getLoginButton.addEventListener('click', loginValidator);

const trybewartsRating = () => {
  const getRatingContainer = document.querySelector('.rating-container');

  for(let i = 1; i <= 10; i += 1) {
    const setInputNumber = document.createElement('input');
    setInputNumber.type = 'radio';
    setInputNumber.value = i;
    setInputNumber.id = `rating${i}`;
    setInputNumber.name = 'rate';

    const setInputLabel = document.createElement('label');
    setInputLabel.innerHTML = `<label for="rating${i}" id="label${i}">${i}</label>`

    getRatingContainer.appendChild(setInputNumber);
    getRatingContainer.appendChild(setInputLabel);
  }
}
trybewartsRating();