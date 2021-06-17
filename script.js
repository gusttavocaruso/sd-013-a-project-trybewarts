const botao = document.querySelector("#submit-btn");
const checkBox = document.querySelector("#agreement");

function oi () {
  if (checkBox.checked) {
    botao.disabled = false;
  }else {
    botao.disabled = true;
  }
}