import React, { useState } from 'react';

const ModalRequerimientos = ({ onClose }) => {
    const [fechaCarga, setFechaCarga] = useState('');
    const [fechaEntrega, setFechaEntrega] = useState('');
    const [tipo, setTipo] = useState('');
    const [productoCarga, setProductoCarga] = useState('');
    const [cantidadCarga, setCantidadCarga] = useState('');
    const [pesoCarga, setPesoCarga] = useState('');
    const [dimensiones, setDimensiones] = useState('');
    const [descCarga, setDescCarga] = useState('');

    return (
        <div className="modalBackground">
            <div className="modalContent">
                <button onClick={onClose}>Cerrar modal</button>
                <header>Requerimientos</header>
                <div className='seccion seccionDatos'>
                    <div className='parteSeccion'>
                        <h3>Datos</h3>
                        <div className='parteForm'>
                            <label>Fecha carga</label>
                            <input
                                id="inputFechaCarga"
                                name="inputFechaCarga"
                                value={fechaCarga}
                                type="date"
                                placeholder="Fecha de carga"
                                onChange={(e) => setFechaCarga(e.target.value)}
                                className="inputFechaCarga"
                            />
                        </div>
                        <div className='parteForm'>
                            <label>Fecha entrega</label>
                            <input
                                id="inputFechaEntrega"
                                name="inputFechaEntrega"
                                value={fechaEntrega}
                                type="date"
                                placeholder="Fecha entrega"
                                onChange={(e) => setFechaEntrega(e.target.value)}
                                className="inputFechaEntrega"
                            />
                        </div>
                        <div className='parteForm'>
                            <label>Tipo</label>
                            <input
                                id="inputTipo"
                                name="inputTipo"
                                value={tipo}
                                type="text"
                                placeholder="Tipo de entrega"
                                onChange={(e) => setTipo(e.target.value)}
                                className="inputTipo"
                            />
                        </div>
                    </div>
                    <div className='parteSeccion'>
                        <h3>Carga</h3>
                        <div className='parteForm'>
                            <label>Producto</label>
                            <input
                                id="inputProducto"
                                name="inputProducto"
                                value={productoCarga}
                                type="text"
                                placeholder="Producto de carga"
                                onChange={(e) => setProductoCarga(e.target.value)}
                                className="inputProducto"
                            />
                        </div>
                        <div className='parteForm'>
                            <label>Cantidad</label>
                            <input
                                id="inputCantidad"
                                name="inputCantidad"
                                value={cantidadCarga}
                                type="number"
                                placeholder="Cantidad de carga"
                                onChange={(e) => setCantidadCarga(e.target.value)}
                                className="inputCantidad"
                            />
                        </div>
                        <div className='parteForm'>
                            <label>Peso</label>
                            <input
                                id="inputPeso"
                                name="inputPeso"
                                value={pesoCarga}
                                type="number"
                                placeholder="Peso de carga"
                                onChange={(e) => setPesoCarga(e.target.value)}
                                className="inputPeso"
                            />
                        </div>
                        <div className='parteForm'>
                            <label>Dimensiones</label>
                            <input
                                id="inputDimensiones"
                                name="inputDimensiones"
                                value={dimensiones}
                                type="text"
                                placeholder="Dimensiones de carga"
                                onChange={(e) => setDimensiones(e.target.value)}
                                className="inputDimensiones"
                            />
                        </div>
                        <div className='parteForm'>
                            <label>Descripción</label>
                            <input
                                id="inputDescCarga"
                                name="inputDescCarga"
                                value={descCarga}
                                type="text"
                                placeholder="Descripción de la carga"
                                onChange={(e) => setDescCarga(e.target.value)}
                                className="inputDescCarga"
                            />
                        </div>
                        <button className='btnAgregarProducto'>Agregar</button>
                    </div>
                </div>
                <div className='seccion seccionTabla'>
                    <div className='contenidoTabla'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Descripción</th>
                                    <th>Peso</th>
                                    <th>Dimensiones</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Botellas de agua</td>
                                    <td>250</td>
                                    <td>Botellas de agua de la marca aguafiel</td>
                                    <td>600gr</td>
                                    <td>10cm x 12cm</td>
                                    <td>
                                        <button>Editar</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Botellas de agua</td>
                                    <td>250</td>
                                    <td>Botellas de agua de la marca aguafiel</td>
                                    <td>600gr</td>
                                    <td>10cm x 12cm</td>
                                    <td>
                                        <button>Editar</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Botellas de agua</td>
                                    <td>250</td>
                                    <td>Botellas de agua de la marca aguafiel</td>
                                    <td>600gr</td>
                                    <td>10cm x 12cm</td>
                                    <td>
                                        <button>Editar</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalRequerimientos;
