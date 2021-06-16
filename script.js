// Puxa o botão de aceitar os termos
let agreement = document.getElementById('agreement');
// Puxa o botão de enviar
let submit = document.getElementById('submit-btn');
// Habilita o botão de enviar ao aceitar os termos
agreement.onchange = function () {
  if (submit.disabled == true){
  submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}