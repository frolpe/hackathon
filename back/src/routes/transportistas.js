// Conexion a la base de datos
const express = require('express')
const empleados = express.Router()
const client = require('./connection');

async function main(){
    try {
        // Conectarse al MongoDB cluster
        await client.connect();

        // Acceder a la base de datos y coleccion
        const database = client.db("Hackathoon");
        const collection = database.collection("Transportistas");

        var nombre = document.getElementById('#').value
        var telefono = document.getElementById('#').value
        var correo = document.getElementById('#').value
        var id_empresa = "#" //esta lo tiene que obtener de manera automatica dependiendo de quien sea el que lo registro
    
        if (nombre && telefono && correo && id_empresa) {
            if (!nombre.length == 0 && !telefono.length == 0 && !correo.length == 0 && !id_empresa == 0) {
                var numero = parseInt(telefono)
                if((validarNumero(numero)) && (validarEmail(correo))){                
                    const newDoc = {
                        nombre: nombre,
                        telefono: numero,
                        correo: correo,
                        id_empresa: id_empresa
                    };
                    // Insert the document into the collection
                    const result = collection.insertOne(newDoc);
                    console.log(`${result.insertedCount} Documento insertado con ID: ${result.insertedId}`);
                }
            }
        
        }

        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
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



main().catch(console.error);




