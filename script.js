const botao = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

function oi () {
  if (checkBox.checked) {
    botao.disabled = false;
  }else {
    botao.disabled = true;
  }
}

// CONTADOR TEXTAREA
function  () {
  const areaText = document.querySelector('#story');
  const counterText = document.querySelector('#counter');                                                                            
  addEventListener(areaText, 'focus', updateCounter);
  addEventListener(areaText,'input', updateCounter);

  addEventListener(areaText,'blur', function() {
    if(areaText.nodeValue.lengh <= 500){
      counterText.className = 'hide'
    }
  });

  function updateCounter(e) {
    let target = e.target || e.srcElement;
    let contador = 500 - target.value.length;
    if(count < 0)
  }
}

