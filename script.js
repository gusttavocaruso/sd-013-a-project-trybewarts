const validaInfo = document.getElementById('agreement');;
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function concordaInfo() {
  if (validaInfo.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

validaInfo.addEventListener('click',concordaInfo);