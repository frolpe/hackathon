import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../assets/css/estiloLogin.css';
import '../assets/css/estiloRecomendacions.css'

const RecomendacionesPage = () => {
    const [recomendacion, setRecomendacion] = useState('');
    const [tipo, setTipo] = useState('');
    const [valoracion, setValoracion] = useState('');
    const [camiones, setCamiones] = useState('');

    return (
        <div className='contedorPrincipal'>
            <div className='contenidoPrincipal'>
            <Link style={{marginLeft: '60px'}}  className='btnRegsitrar' to="/detalles">Estatus de pedidos</Link>
                <div className='seccion seccionRecomendaciones'>
                    <h2>Recomendaciones</h2>
                    <div className='contenidoTarjetas'>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='seccion seccionTodas'>
                    <h2>Todas</h2>
                    <div className='contenedorControles'>
                        <div className='parteForm'>
                            <label>Buscar recomendación</label>
                            <input
                                type="text"
                                placeholder="Ingresa un nombre de empresa"
                                value={recomendacion}
                                onChange={(e) => setRecomendacion(e.target.value)}
                                className="inputBuscador"
                            />
                        </div>
                        <div className='parteForm'>
                            <div className='controlesEtiquetas'>
                                <div className='parteEtiqueta'>
                                    <label>Tipo</label>
                                    <input
                                        type="text"
                                        placeholder="Tipo de empresa"
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                        className="inputTipo"
                                    />
                                </div>
                                <div className='parteEtiqueta'>
                                    <label>Valoración</label>
                                    <input
                                        type="decimal"
                                        placeholder="Valoración empresa"
                                        value={valoracion}
                                        onChange={(e) => setValoracion(e.target.value)}
                                        className="inputValoracion"
                                    />
                                </div>
                                <div className='parteEtiqueta'>
                                    <label>Camiones activos</label>
                                    <input
                                        type="number"
                                        placeholder="Número de camiones"
                                        value={camiones}
                                        onChange={(e) => setCamiones(e.target.value)}
                                        className="inputCamiones"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='contenidoTarjetas'>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='header'>
                                <div className='ciculo'></div>
                                <h4>Empresa</h4>
                            </div>
                            <div className='cuerpoTarjeta'>
                                <div className='parteCuerpo'>
                                    <h5>Tipo</h5>
                                    <p className='tipoEmpresa'>Ganadera</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Valoración</h5>
                                    <p className='valoracionEmpresa'>4.8</p>
                                </div>
                                <div className='parteCuerpo'>
                                    <h5>Camiones activos</h5>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className='footerTarjeta'>
                                <button className='btnDetalles'>Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecomendacionesPage