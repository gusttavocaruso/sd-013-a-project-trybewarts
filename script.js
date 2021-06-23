// Requisito 3
const desafio3 = () => {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', () => {
    if ((login.value !== 'tryber@teste.com') && (senha.value !== '123456')) {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
};
desafio3();

const desafio9 = () => {
  const arrayValues = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
  const arrayIds = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];
  const select = document.getElementById('house');

  for (let i = 0; i < 4; i += 1) {
    const arrayId = arrayIds[i];
    const arrayValue = arrayValues[i];
    const option = document.createElement('option');
    option.setAttribute('value', arrayValue);
    option.setAttribute('id', arrayId);
    if (arrayValue === 'Corvinode') {
      option.setAttribute('selected', arrayValue);
    }
    option.innerText = arrayValue;
    select.appendChild(option);
  }
};
desafio9();

const desafio12 = () => {
  const divFamily = document.querySelector('#divFamily');
  const languages = ['Frontend', 'Backend', 'FullStack'];
  for (let i = 0; i < languages.length; i += 1) {
    const divRadio = document.createElement('div');
    const language = languages[i];
    const inputs = document.createElement('input');
    inputs.setAttribute('type', 'radio');
    inputs.setAttribute('value', language);
    inputs.setAttribute('id', language);
    inputs.setAttribute('name', 'family');
    divRadio.appendChild(inputs);
    const labels = document.createElement('label');
    labels.setAttribute('for', language);
    labels.innerText = language;
    divRadio.appendChild(labels);
    divFamily.appendChild(divRadio);
  }
};
desafio12();

const desafio13 = () => {
  const checkbox = document.querySelector('#checkbox');
  const nomes = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  for (let i = 0; i < nomes.length; i += 1) {
    const nome = nomes[i];
    const inputs = document.createElement('input');
    inputs.classList.add('subject');
    inputs.setAttribute('type', 'checkbox');
    inputs.setAttribute('class', 'form-check-input');
    inputs.setAttribute('value', nome);
    inputs.setAttribute('id', nome);
    checkbox.appendChild(inputs);
    const label = document.createElement('label');
    label.setAttribute('for', nome);
    label.innerText = nome;
    label.setAttribute('class', 'labels');
    checkbox.appendChild(label);
  }
};
desafio13();

const desafio14 = () => {
  const divRadio = document.querySelector('#divRadio');
  const radio = document.querySelector('#radio');
  for (let i = 1; i <= 10; i += 1) {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('value', i);
    input.setAttribute('name', 'rate');
    input.setAttribute('id', i);
    input.style.marginLeft = '12px';
    radio.appendChild(input);
    const labels = document.createElement('label');
    labels.innerText = i;
    labels.style.marginRight = '2px';
    labels.setAttribute('for', i);
    radio.appendChild(labels);
    divRadio.appendChild(radio);
  }
};
desafio14();

const inputRadio = () => {
  const radios = document.querySelectorAll('input');

  for (let i = 0; i < radios.length; i += 1) {
    const radio = radios[i];
    if (radio.type === 'radio') {
      radio.setAttribute('class', 'form-check-input');
    }
  }
};
inputRadio();

const desafio18 = () => {
  const box = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  button.disabled = true;

  box.addEventListener('click', () => {
    if (box.checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
};
desafio18();

// desafio20();
