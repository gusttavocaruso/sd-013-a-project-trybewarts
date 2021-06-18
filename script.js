// Requisito 3
const desafio3 = () => {
  let login = document.querySelector('#login');
  let senha = document.querySelector('#senha');
  let btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click',() => {
    if((login.value !== 'tryber@teste.com' ) && (senha.value !== '123456')) {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}
desafio3();

// const desafio13 = () => {
//   let checkbox = document.querySelector('#checkbox');
//   checkbox.style.display = 'flex';
//   let nomes = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];

//   for(let i = 0; i < nomes.length; i += 1) {
//     let nome = nomes[i];
//     let inputs = document.createElement('input');
//     inputs.setAttribute('type', 'checkbox');
//     inputs.setAttribute('value',nome);
//     inputs.innerText = nome;
//     inputs.classList.add('subject');
//     inputs.classList.add('form-check-input');
//     checkbox.appendChild(inputs);
//   }
// }
// desafio13();
