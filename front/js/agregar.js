window.onload = init
const client = require('hackathon\back\src\routes\connection.js');
function init(){

}

function agregar_t(){
    var nombre = document.getElementById('#').value
    var telefono = document.getElementById('#').value
    var correo = document.getElementById('#').value
    var id_empresa = "#" //esta lo tiene que obtener de manera automatica dependiendo de quien sea el que lo registro

    if (!nombre.length == 0 && !telefono.length == 0 && !correo.length == 0 && !id_empresa == 0) {
        var numero = parseInt(telefono)
        if((validarNumero(numero)) && (validarEmail(correo))){
            
            // Conectarse al MongoDB cluster
            client.connect();

            // Acceder a la base de datos y coleccion
            const database = client.db("Hackathoon");
            const collection = database.collection("Transportistas");

            // const { nombre, direccion, correo } = req.body;
            const nombre = 'Federico Peluche';
            const direccion = 'Av. Siempre Viva #2';
            const correo =  'VendoPozole@gmail.com';
            
            // Crear documento
            const document = {
                nombre: nombre,
                direccion: direccion,
                correo: correo
            };
            // Insertar el documento
            const result = await collection.insertOne(document);

        console.log(`${result.insertedCount} 'Transportista agregado exitosamente con ID: ${result.insertedId}`);
            
            axios({
                method: 'post', 
                url: 'http://localhost:3000/transportistas/agregar_transportista',
                data:{

                }
            })
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