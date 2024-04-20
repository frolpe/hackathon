// Conexion a la base de datos
const express = require('express')
const empleados = express.Router()


async function main(){
    try {

        empleados.post('/agregar', async (req, res, next) => {
            const { nombre_empleado, apellidos_empleado, telefono_empleado, correo_empleado, direccion_empleado } = req.body
        
            if (nombre_empleado && apellidos_empleado && telefono_empleado && correo_empleado && direccion_empleado) {
                let query = "INSERT INTO empleados(nombre_empleado, apellidos_empleado, telefono_empleado, correo_empleado, direccion_empleado)"
                query += ` VALUES('${nombre_empleado}', '${apellidos_empleado}', ${telefono_empleado}, '${correo_empleado}', '${direccion_empleado}')`
        
                const rows = await db.query(query)
        
                if (rows.affectedRows == 1) {
                    return res.status(200).json({code: 201, message: "Empleado agregado correctamente"})
                }
                return res.status(500).json({code: 500, message: "Ocurrió un error"})
            }
            return res.status(500).json({code: 500, message: "Campos incompletos"})
        })

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);




