function checkLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

document.getElementsByClassName('btn-login')[0].addEventListener('click', checkLogin);

function returnForm() {
  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materias = document.querySelectorAll('input[type=checkbox][class="subject"]:checked');
  let materiasString = '';
  for (let i = 0; i < materias.length; i += 1) {
    if (i > 0) materiasString = `${materiasString}, ${materias[i].value}`;
    else materiasString = `${materias[i].value}`;
  }
  const avalicao = document.querySelector('input[name="rate"]:checked').value;
  const observacao = document.getElementById('textarea').value;
  let paragraph = `Nome: ${name} ${lastName}<br>Email: ${email}<br>Casa: ${casa}<br>`;
  paragraph = `${paragraph}Família: ${familia}<br>Matérias: ${materiasString}<br>`;
  paragraph = `${paragraph}Avaliação: ${avalicao}<br>Observações: ${observacao}`;
  form.innerHTML = `<p id="final-text">${paragraph}</p>`;
}

function checkForm(event) {
  const input = document.getElementById('agreement');
  if (!input.checked) {
    event.preventDefault();
  } else {
    returnForm();
  }
}
document.getElementById('submit-btn').addEventListener('click', checkForm);

function activeButton(event) {
  const btn = document.getElementById('submit-btn');
  if (event.target.checked) {
    btn.style.backgroundColor = 'indigo';
    btn.disabled = false;
  } else {
    btn.style.backgroundColor = 'rgb(161, 159, 159)';
    btn.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('change', activeButton);

function countChar(event) {
  const counter = document.getElementById('counter');
  counter.innerHTML = 500 - event.target.value.length;
}

document.getElementsByTagName('textarea')[0].addEventListener('keyup', countChar);
