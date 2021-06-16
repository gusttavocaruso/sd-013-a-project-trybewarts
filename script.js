// Puxa o botão de aceitar os termos
const agreement = document.getElementById('agreement');
// Puxa o botão de enviar
const submit = document.getElementById('submit-btn');
// Habilita o botão de enviar ao aceitar os termos
agreement.onchange = () => {
  if (submit.disabled === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};
