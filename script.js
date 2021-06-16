

let btnlogin = document.getElementById('btnLogin');
btnlogin.addEventListener('click', function () {
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login === 'tryber@teste.com') {
        if (senha === '123456') {
            alert('Olá, Tryber!')
        }
    } else {        
        alert('Login ou senha inválidos.')
    }
})