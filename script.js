// Requisito 3
const desafio3 = () => {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click',() => {
    if((login.value !== 'tryber@teste.com' ) && (senha.value !== '123456')) {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}
desafio3();

const desafio12 = () => {
  const divFamily = document.querySelector('#divFamily');
  const divRadio = document.createElement('div');
  divRadio.setAttribute('id','divRadio');
  divFamily.appendChild(divRadio);
  const divLabels = document.createElement('div');
  divLabels.setAttribute('id','divLabels');
  divFamily.appendChild(divLabels);
  const languages = ['Frontend','Backend','FullStack'];

  for(let i = 0; i < languages.length; i += 1) {
    const language = languages[i];
    const inputs = document.createElement('input');
    inputs.setAttribute('type','radio');
    inputs.setAttribute('value',language);
    inputs.setAttribute('id',language);
    inputs.setAttribute('name','family');
    inputs.style.marginBottom = '10px'
    divRadio.appendChild(inputs);

    const labels = document.createElement('label');
    labels.setAttribute('for',language);
    labels.innerText = language;
    labels.setAttribute('class','languagesLabel')
    divLabels.appendChild(labels);

  }
}
desafio12();

const desafio13 = () => {
  const checkbox = document.querySelector('#checkbox');
  const nomes = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];

  for(let i = 0; i < nomes.length; i += 1) {
    const nome = nomes[i];
    const inputs = document.createElement('input');
    inputs.classList.add('subject');
    inputs.setAttribute('type', 'checkbox');
    inputs.setAttribute('value',nome);
    inputs.setAttribute('id',nome)
    checkbox.appendChild(inputs);

    const label = document.createElement('label');
    label.setAttribute('for',nome);
    label.innerText = nome;
    label.setAttribute('class','labels');
    checkbox.appendChild(label);
  }
}
desafio13();
