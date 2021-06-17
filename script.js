const btnlogin = document.getElementById('btnLogin');
const bntAgreement = document.getElementById('agreement');
const bntTextarea = document.getElementById('textarea');
const bntSubmit = document.getElementById('submit-btn');

btnlogin.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com') {
    if (senha === '123456') {
      alert('Olá, Tryber!');
    }
  } else {
    alert('Login ou senha inválidos.');
  }
});

bntAgreement.addEventListener('click', (el) => {
  bntSubmit.disabled = !el.target.checked;
});

bntTextarea.addEventListener('keyup', (el) => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - el.target.value.length;
});

function ultimate(el) {
  el.preventDefault();
  const paramts = new FormData(document.getElementById('evaluation-form'));
  const listmateria = [
    paramts.get('hofs'),
    paramts.get('jest'),
    paramts.get('promises'),
    paramts.get('react'),
    paramts.get('sql'),
    paramts.get('python'),
  ];
  let textMat = '';
  listmateria.forEach((item) => {
    textMat += item || ' ';
  });
  const section = document.createElement('div');
  const p = document.createElement('p');
  const elment = document.querySelector('main');
  elment.removeChild(elment.firstElementChild);
  section.classList.add('subject');
  p.innerText = `Nome: ${paramts.get('name')} ${paramts.get('lastname')}
    Email: ${paramts.get('email')}
    Casa: ${paramts.get('casa')}
    Família: ${paramts.get('family')}
    Matérias: ${textMat}
    Avaliação:  ${paramts.get('rate')}
    Observações: ${paramts.get('textarea')}`;
  section.appendChild(p);
  elment.prepend(section);
}

bntSubmit.addEventListener('click', ultimate);
