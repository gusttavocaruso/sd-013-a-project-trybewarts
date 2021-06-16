const getEmailInput = document.querySelector("#email");
const getPasswordInput = document.querySelector("#password");
const getLoginButton = document.querySelector("#input-login-button");
const loginValidator = () => {
  if(getEmailInput.value === "tryber@teste.com" && getPasswordInput.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos");
  }
}
getLoginButton.addEventListener("click", loginValidator);