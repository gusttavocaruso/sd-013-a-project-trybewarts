const botao = document.querySelector("#submit-btn")

function habilitar (valor) {
  if (botao == 'sim' && !status) {
    botao.habilitar = true;
  }else {
    botao.disable
  }
}