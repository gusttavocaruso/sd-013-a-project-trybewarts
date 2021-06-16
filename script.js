function alertaLogin() {
    const getButton = document.querySelector('#button1');
    const getEmail = document.querySelector('#email');
    const getSenha = document.querySelector('#senha');

    getButton.addEventListener('click', () => {
        if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
            window.alert('Olá, Tryber!');
        } else {
            window.alert('Login ou senha inválidos.');
        }
    });
}
alertaLogin();