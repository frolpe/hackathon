// Coneccion a la base de datos
const client = require('./connection');

async function main(){
    try {
        // Conectarse al MongoDB cluster
        await client.connect();

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

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);




