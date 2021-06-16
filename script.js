// ===============================================================
//     REQUISITO 18 - BOTÃO ENVIAR
// ===============================================================

const checkbox = document.getElementById('agreement');

function buttonSubmit() {
  const agreement = document.getElementById('agreement').checked;
  const btn = document.getElementById('submit-btn');
  if (agreement) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkbox.addEventListener('input', buttonSubmit);
