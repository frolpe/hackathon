import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Importa aquí tu componente de modal (supongamos que se llama Modal)
import ModalRequerimientos from './modalRequerimientos';

const Detalles = () => {
    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar si el modal está abierto

    const handleOpenModal = () => {
        setModalOpen(true); // Abre el modal cuando se hace clic en el botón
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Cierra el modal cuando se hace clic fuera del modal o en un botón de cierre
    };

    return (
        <div className='contenedorPrincipal'>
            <div className='primeraSeccion'>
                <h2>Detalles</h2>
                <button className='btnCotizar' onClick={handleOpenModal}>Cotizar</button>
            </div>
            {/* Agrega aquí tu modal */}
            {modalOpen && <ModalRequerimientos onClose={handleCloseModal} />} 
            <div className='segundaSeccion'>
                <div className='infoEmpresa'>
                    <div className='contenedorInfoFoto'>
                        <img src='#'/>
                        <h4 className='nombreEmpresa'>Facturadoras S.A</h4>
                    </div>
                    <div className='contenidoInfo'>
                        <div className='parteInfo'>
                            <h5>Tipo</h5>
                            <p className='tipoEmpresa'>Ganadera</p>
                        </div>
                        <div className='parteInfo'>
                            <h5>Valoración</h5>
                            <p>4.8</p>
                        </div>
                    </div>
                </div>
                <div className='infoDetallada'>
                    <div className='parteInfoDetallada'>
                        <h5>Descripción</h5>
                        <p className='descEmpresa'>Somos una empresa dedicada a soluciones de envío de ganado a los diferentes puntos centrales de...</p>
                    </div>
                    <div className='parteInfoDetallada'>
                        <h5>Ubicación</h5>
                        <p className='ubiEmpresa'>Av. de las Ciencias esq Santa Rosa Jáuregui, Blvd. Villas del Meson S/N, Rancho Largo, 76230 Rancho Largo, Qro.</p>
                    </div>
                    <div className='parteInfoDetallada'>
                        <h5>Teléfono</h5>
                        <p className='telEmpresa'>44-44-44-44-44</p>
                    </div>
                    <div className='parteInfoDetallada'>
                        <h5>Correo</h5>
                        <p className='emailEmpresa'>patito@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='terceraSeccion'>
                <div className='contenedorCal'>
                    <h2>Calificaciones</h2>
                    <div className='contenedorInfoCal'>
                        <div className='parteCal'>
                            <h5>Tiempos de respuesta</h5>
                            <p className='tiempoRes'>2:30</p>
                        </div>
                        <div className='parteCal'>
                            <h5>Estado de la entrega</h5>
                            <p className='estadoEntrega'>En camino</p>
                        </div>
                        <div className='parteCal'>
                            <h5>Reputación</h5>
                            <p className='reputacionEmpresa'>Mala</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detalles;
