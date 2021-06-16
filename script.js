// Requisito 18
const button = document.getElementById('submit-btn');
const checkedStatus = document.getElementById('agreement');
function statusButton() {
  console.log(checkedStatus.checked);
  if (checkedStatus.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
checkedStatus.addEventListener('click', statusButton);