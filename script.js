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

function listaMaterial(formPatamts, lista) {
  const paramts = formPatamts;
  lista = lista.filter((item) => paramts.get(item));
  return lista.join(', ');
}

function ultimate() {
  const form = document.getElementById('evaluation-form');
  const paramts = new FormData(form);
  const listmateria = ['HoFs', 'Jest', 'Promises',
    'React', 'SQL', 'Python'
  ];

  form.innerHTML = `Nome: ${paramts.get('name')} ${paramts.get('lastname')}<br>
    Email: ${paramts.get('email')}<br>
    Casa: ${paramts.get('casa')}<br>
    Família: ${paramts.get('family')}<br>
    Matérias: ${listaMaterial(paramts, listmateria)}<br>
    Avaliação:  ${paramts.get('rate')}<br>
    Observações: ${paramts.get('textarea')}<br>`;
}

bntSubmit.addEventListener('click', ultimate);
