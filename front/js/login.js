window.onload = init
const client = require('hackathon\back\src\routes\connection.js');

function init() {
    document.querySelector('.btnIniciar').addEventListener('click', login)

}
function login(){
    var correo = document.getElementById('inputCorreo').value
    var contrasena = document.getElementById('inputPassword').value

}