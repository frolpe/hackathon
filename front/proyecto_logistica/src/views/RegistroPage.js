import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../assets/css/estiloLogin.css';

const RegistroPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombreEmpresa, setNombreEmpresa] = useState('')
    const [tipoEmpresa, setTipoEmpresa] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

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
            <div className="formContainer">
                <h2>Registro de empresa</h2>
                <p className="text">Ingresa los siguientes datos</p>

                <div className='seccionForm'>
                    <h1>Información de la empresa</h1>
                    <div className='parteForm'>
                        <label>Nombre de la empresa</label>
                        <input
                            type="text"
                            placeholder="Nombre empresa"
                            value={nombreEmpresa}
                            onChange={(e) => setNombreEmpresa(e.target.value)}
                            className="inputNombreEmpresa"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Correo electrónico</label>
                        <input
                            type="password"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inputPassword"
                        />
                    </div>
                    <div className='parteForm'>
                        <label>Tipo de empresa</label>
                        <input
                            type="text"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inputPassword"
                        />
                    </div>
                </div>

                <p className="errorText">{errorMessage}</p>
                <button className='btnIniciar' onClick={login}>Iniciar</button>
                {/* Agrega el enlace a la página de registro */}
                <Link className='btnRegsitrar' to="/registroEmpresa">¿No tienes una cuenta? Registrate aquí</Link>
            </div>
        </div>
    );
};

export default RegistroPage;
