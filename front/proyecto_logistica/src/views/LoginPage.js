import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../assets/css/estiloLogin.css';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
    const { loginWithRedirect }=useAuth0()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                <h2>Iniciar sesión</h2>
                <p style={{marginBottom: '5px'}} className="text">Ingresa los siguientes datos</p>
                {/* <div className='parteForm'>
                    <label>Correo electrónico</label>
                    <input
                        type="text"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputCorreo"
                    />
                </div>
                <div className='parteForm'>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputPassword"
                    />
                </div> */}
                <p className="errorText">{errorMessage}</p>
                <button style={{ transform: 'scale(1)' }} className='btnIniciar' onClick={() =>loginWithRedirect()}>Iniciar</button>
                {/* Agrega el enlace a la página de registro */}
                <Link className='btnRegsitrar' to="/registroEmpresa">¿No tienes una cuenta? Registrate aquí</Link>
            </div>
        </div>
    );
};

export default LoginPage;
