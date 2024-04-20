import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../assets/css/estiloLogin.css';
import '../assets/css/estiloPedidosEstado.css';

const PedidoEstadoPage = () => {
    return (
        <div className='contedorPrincipal'>
            <div className='contenidoPrincipal'>
                <div className='seccion seccionPendientes'>
                    <h2>Pendientes</h2>
                    <div className='contenidoTabla'>
                        <table className='tablaPendientes'>
                            <thead>
                                <tr>
                                    <th>Empresa</th>
                                    <th>Tipo de carga</th>
                                    <th>Fecha petición</th>
                                    <th>Descripción</th>
                                    <th>Tiempo restante</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Patito</td>
                                    <td>Ganadera</td>
                                    <td>19/04/2024</td>
                                    <td>Envió de diferentes...</td>
                                    <td>08:05 hrs</td>
                                    <td className='acciones'>
                                        <button>Editar</button>
                                        <button>Detalles</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Patito</td>
                                    <td>Ganadera</td>
                                    <td>19/04/2024</td>
                                    <td>Envió de diferentes...</td>
                                    <td>08:05 hrs</td>
                                    <td className='acciones'>
                                        <button>Editar</button>
                                        <button>Detalles</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Patito</td>
                                    <td>Ganadera</td>
                                    <td>19/04/2024</td>
                                    <td>Envió de diferentes...</td>
                                    <td>08:05 hrs</td>
                                    <td className='acciones'>
                                        <button>Editar</button>
                                        <button>Detalles</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='seccion seccionAceptados'>
                    <h2>Aceptados</h2>
                    <div className='contenidoTabla'>
                        <table className='tablaAceptados'>
                            <thead>
                                <tr>
                                    <th>Empresa</th>
                                    <th>Tipo de carga</th>
                                    <th>Fecha de petición</th>
                                    <th>Fecha de aceptación</th>
                                    <th>Descripción</th>
                                    <th>Tiempo restante</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Patito</td>
                                    <td>Ganadera</td>
                                    <td>19/04/2024</td>
                                    <td>20/04/2024</td>
                                    <td>Envió de diferentes...</td>
                                    <td>08:05 hrs</td>
                                    <td className='acciones'>
                                        <button>Editar</button>
                                        <button>Detalles</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Patito</td>
                                    <td>Ganadera</td>
                                    <td>19/04/2024</td>
                                    <td>20/04/2024</td>
                                    <td>Envió de diferentes...</td>
                                    <td>08:05 hrs</td>
                                    <td className='acciones'>
                                        <button>Editar</button>
                                        <button>Detalles</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PedidoEstadoPage