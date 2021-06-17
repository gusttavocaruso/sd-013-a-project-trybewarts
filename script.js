//requirement 18 
var sendButton = document.querySelector('#submit-btn');
sendButton.disabled = true;

function submitChecked(){
const checkedAgreement = document.querySelector('#agreement');  
  if(checkedAgreement.checked){    
   sendButton.disabled = false
  }else{
   sendButton.disabled = true
  }

}
