const btnForm = document.getElementById('btn');
const loginBtn = document.getElementById('loginBtn');
const senhaBtn = document.getElementById('senhaBtn');
const email = 'tryber@teste.com';
const senha = '123456';

function Eventclick() {
  if ((loginBtn.value !== email) || (senhaBtn.value !== senha)) {
    alert('Olá, Tryber!');
    // alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
btnForm.addEventListener('click', Eventclick);

const env = document.querySelector('#submit-btn');
const box = document.querySelector('#agreement');

function oi() {
  if (box.checked) {
    env.disabled = false;
  } else {
    env.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', oi);


// // CONTADOR TEXTAREA
// function  () {
//   const areaText = document.querySelector('#story');
//   const counterText = document.querySelector('#counter');                                                                            
//   addEventListener(areaText, 'focus', updateCounter);
//   addEventListener(areaText,'input', updateCounter);

//   addEventListener(areaText,'blur', function() {
//     if(areaText.nodeValue.lengh <= 500){
//       counterText.className = 'hide'
//     }
//   });

//   function updateCounter(e) {
//     let target = e.target || e.srcElement;
//     let contador = 500 - target.value.length;
//     if(count < 0)
//   }
// }

