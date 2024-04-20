window.onload = init

function init(){

}

function agregar_c(){
    var nombre = document.getElementById('#').value
    var telefono = document.getElementById('#').value
    var correo = document.getElementById('#').value
    var id_empresa = "#" //esta lo tiene que obtener de manera automatica dependiendo de quien sea el que lo registro

    if (!nombre.length == 0 && !telefono.length == 0 && !correo.length == 0 && !id_empresa == 0) {
        var numero = parseInt(telefono)
        if((validarNumero(numero)) && (validarEmail(correo))){
            
        }
    }

}

function validarNumero(valor) {
    var numero = parseInt(valor)

    if ((Number.isInteger(numero))) {
        return true
    } 
    else {
        alert("Ingresa un teléfono válido");
    }
}

function validarEmail(valor) {
    var correo = valor.toString()
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (emailRegex.test(correo)){
        return true
    } 
    else {
        alert("Ingresa un correo válido");
    }
}