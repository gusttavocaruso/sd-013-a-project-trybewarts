const COUNTER_INPUT = document.getElementById('counter');
const COUNTER_SHOW = document.getElementById('counter-show');

COUNTER_INPUT.addEventListener('input', counterRun);

function counterRun (event) {
  //Com o auxílio de: https://stackoverflow.com/questions/5371089/count-characters-in-textarea
  const CHARS_LENGTH = COUNTER_INPUT.value.length;
  const MAX_LENGTH = COUNTER_INPUT.getAttribute('maxlength');
  
  COUNTER_SHOW.innerText = `${MAX_LENGTH - CHARS_LENGTH} caracteres restantes`
}