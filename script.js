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
