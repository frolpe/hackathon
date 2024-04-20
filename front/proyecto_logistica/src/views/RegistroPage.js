import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../assets/css/estiloLogin.css';
import '../assets/css/estiloRegistrar.css';

const RegistroPage = () => {
    const [email, setEmail] = useState('');
    const [contacto, setContacto] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [categoria, setCategoria] = useState('');
    const [certificaciones, setCertificaciones] = useState('');
    const [nombreEmpresa, setNombreEmpresa] = useState('')
    const [direccionEmpresa, setDireccionEmpresa] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    // Funciones para manejar el cambio de estado de cada checkbox
    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1); // Cambia el estado del primer checkbox
    };

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2); // Cambia el estado del segundo checkbox
    };

    const login = () => {
        if (!email || !password) {
            setErrorMessage('Por favor, introduce tu correo electrónico y contraseña.');
        } else {
            // Aquí iría tu lógica de autenticación
        }
    };

    return (
        <div className="container">
            <div className="imageContainer">
                <div className='imagenLogin'></div>
            </div>
            <div className="formContainer" style={{ justifyContent: 'flex-start' }}>
                <h2 style={{ marginTop: '70px !important' }}>Registro de empresa</h2>

                <p className="text">Ingresa los siguientes datos</p>
                <div className='titulo'>
                    <h1>Información de la empresa</h1>
                </div>
                <div className='controlesTipo'>
                    <div className='parteControlesTipo'>
                        {/* Primer checkbox */}
                        <input
                            type="checkbox"
                            checked={isChecked1}
                            onChange={handleCheckboxChange1}
                            className='ckb'
                            id="ckbTransporte" // Asegúrate de que el htmlFor del label coincida con el id del input
                        />
                        <label htmlFor="ckbTransporte">Empresa transportista</label>
                    </div>
                    <div className='parteControlesTipo'>
                        {/* Segundo checkbox */}
                        <input
                            type="checkbox"
                            checked={isChecked2}
                            onChange={handleCheckboxChange2}
                            className='ckb'
                            id="ckbManufac" // Asegúrate de que el htmlFor del label coincida con el id del input
                        />
                        <label htmlFor="ckbManufac">Empresa manufacturera</label>
                    </div>
                </div>
                <div className='seccionForm'>
                    <div className='parteForm'>
                        <label>Nombre comercial</label>
                        <input
                            type="text"
                            placeholder="Nombre empresa"
                            value={nombreEmpresa}
                            onChange={(e) => setNombreEmpresa(e.target.value)}
                            className="inputNombreEmpresa"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Dirección</label>
                        <input
                            type="text"
                            placeholder="Dirección de ka empresa"
                            value={direccionEmpresa}
                            onChange={(e) => setDireccionEmpresa(e.target.value)}
                            className="inputDireccion"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inputCorreo"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Contacto</label>
                        <input
                            type="tel"
                            placeholder="Número de contacto"
                            value={contacto}
                            onChange={(e) => setContacto(e.target.value)}
                            className="inputContacto"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Categoría de transporte</label>
                        <input
                            type="text"
                            placeholder="Categoría del transporte"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            className="inputCategoria"
                        />
                    </div>
                    {isChecked1 && ( 
                        <div className='parteForm'>
                            <label>Certificaciones</label>
                            <input
                                type="text"
                                placeholder="Certificaciones de la empresa"
                                value={certificaciones}
                                onChange={(e) => setCertificaciones(e.target.value)}
                                className="inputCertificaciones"
                            />
                        </div>)}
                </div>
                <div className='titulo'>
                    <h1>Autenticación de la empresa</h1>
                </div>
                <div className='seccionForm'>
                    <div className='parteForm'>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña de empresa"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputPassword"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Confirmar contraseña</label>
                        <input
                            type="password"
                            placeholder="Confirmar la contraseña"
                            value={conPassword}
                            onChange={(e) => setConPassword(e.target.value)}
                            className="inputConPassword"
                        />
                    </div>
                </div>
                <p className="errorText">{errorMessage}</p>
                <button className='btnRegistrar' onClick={login}>Registrar</button>
                {/* Agrega el enlace a la página de registro */}
                <Link className='link' to="/">¿Ya tienes una cuenta? Ingresa aquí</Link>
            </div>
        </div>
    );
};

export default RegistroPage;
