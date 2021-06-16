function alerta() {
    const getButton = document.getElementById('button1');
    const getEmail = document.getElementById('inputEmail');
    const getSenha = document.getElementById('inputSenha');

    getButton.addEventListener('click', () => {
        if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
    window.alert('Olá, Tryber!');
    } else {
        window.alert('Login ou senha inválidos.');
    }
  });
}
    alerta();