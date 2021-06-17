//requirement 18 
let sendBtt = document.querySelector('#submit-b');
sendBtt.disabled = true;

function submitChecked(){
const checkedAgreement = document.querySelector('#agreement');  
  if(checkedAgreement.checked){    
    sendBtt.disabled = false
  }else{
    sendBtt.disabled = true
  }

}
