function check() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const emailDefault = 'tryber@teste.com';
  const senhaDefault = '123456';

  if ( login === emailDefault && senha === senhaDefault) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const botao = document.getElementById('botao');
botao.addEventListener('click', check);

const radioButtons = document.getElementById('radioButtons');
for (let i = 1; i <= 10; i += 1) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.setAttribute('for', 'radio-buttons[i]');
  label.innerHTML = i;
  input.name = 'rate';
  input.type = 'radio';
  input.value = i;
  label.appendChild(input);
  radioButtons.appendChild(label);
}