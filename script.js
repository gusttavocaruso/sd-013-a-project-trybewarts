const enviarBtn = document.querySelector('#submit-btn');
const aceitoText = document.querySelector('#label-infos');
const aceitoCheck = document.querySelector('#agreement');
const chars = document.querySelector('#counter');
const texarea = document.querySelector('#textarea');
const myform = document.querySelector('#evaluation-form');
const saveInputs = [];

function handler() {
  const concordo = document.querySelectorAll('input[name="concordo"]:checked');
  if (concordo.length !== 0) {
    enviarBtn.disabled = false;
  } else {
    enviarBtn.disabled = true;
  }
}

function counter() {
  console.log('teste');
  const count = texarea.value.length;
  chars.innerText = 500 - count;
}

const login = document.getElementById('input-login');
const senha = document.getElementById('input-senha');
const logar = document.querySelector('#header-button');

logar.addEventListener('click', () => {
  if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Envia para o array o nome completo, email e casa escolhida
function saveNameEmailHouse() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  saveInputs.push(`Nome: ${nome} ${sobrenome}`);
  saveInputs.push(`Email: ${document.querySelector('#input-email').value}`);
  const casa = document.querySelector('select[name="casa"]');
  saveInputs.push(`Casa: ${casa.options[casa.selectedIndex].text}`);
}

// Envia para o array a família escolhida e as matérias
function saveFamilySubjects() {
  const familia = document.querySelector('input[name="family"]:checked');
  if (familia !== null) {
    saveInputs.push(`Família: ${familia.nextElementSibling.innerHTML}`);
  }
  const listaConteudos = document.querySelectorAll('input[type="checkbox"]:checked');
  let conteudo = '';
  for (let index = 0; index < listaConteudos.length - 1; index += 1) {
    conteudo += `${listaConteudos[index].value}, `;
  }
  saveInputs.push(`Matérias: ${conteudo.slice(0, -2)}`);
}

// Envia para o array a avaliação e as observações
function saveNotesRate() {
  const rate = document.querySelector('input[name="rate"]:checked');
  if (rate !== null) {
    saveInputs.push(`Avaliação: ${rate.value}`);
  }
  saveInputs.push(`Observações: ${document.querySelector('#textarea').value}`);
}

function resultadoForm() {
  saveNameEmailHouse();
  saveFamilySubjects();
  saveNotesRate();
  myform.innerHTML = '';

  for (let index = 0; index < saveInputs.length; index += 1) {
    const p = document.createElement('p');
    p.setAttribute('class', 'result');
    p.innerText = saveInputs[index];
    myform.appendChild(p);
  }
}

new window.JustValidate('#evaluation-form', {
  rules: {
    nome: {
      required: true,
    },
    sobrenome: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    casa: {
      required: true,
    },
    radio: {
      required: true,
    },
    radio2: {
      required: true,
    },
    textarea: {
      required: true,
    },
    agree: {
      required: true,
    },
  },
  messages: {
    nome: {
      required: 'Preencha este campo!',
    },
    sobrenome: {
      required: 'Preencha este campo.',
    },
    email: {
      required: 'Preencha este campo!',
      email: 'Digite um email válido',
    },
    casa: {
      required: 'Escolha uma casa.',
    },
    radio: {
      required: 'Escolha uma família.',
    },
    radio2: {
      required: 'Escolha uma nota.',
    },
    textarea: {
      required: 'Deixe um comentário.',
    },
    agree: {
      required: 'Concorde com o uso das informações.',
    },
  },

  focusWrongField: true,

  submitHandler(form, values, ajax) {
    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback(response) {
        alert(`Formulário enviado! \nResposta do servidor: ${response}`);
        resultadoForm();
      },
      error(response) {
        alert(`AJAX submit error! \nResposta do servidor:${response}`);
      },
    });
  },

  invalidFormCallback(errors) {
    console.log(errors);
  },
});

// enviarBtn.addEventListener('click', resultadoForm);
aceitoCheck.addEventListener('click', handler);
aceitoText.addEventListener('click', handler);
texarea.addEventListener('keyup', counter);
