window.onload = function () {
  const login = document.querySelector('input[name=login');
  const senha = document.querySelector('input[name=senha');
  const pressButton = document.querySelector('button[name=button');
  pressButton.addEventListener('click', () => {
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
  const ajuda = document.getElementsByClassName('satisfação');


/*
function a(){  
  for (let aux=0; aux < 10; aux+=1){
    let label = criar('Label');
    ajuda.appendChield(label);
    for (let aux2=0; aux2 < 10; aux+=1){
      let input = criar('Input');
      input.Classname ='rate'; 
      rate.lastElementChild(input);     
      ajuda.appendChild(input);

    }
  }
}
  function criar (nome){
      let elemento = document.createElement(nome);
      return elemento; 
}

a();
*/
};

