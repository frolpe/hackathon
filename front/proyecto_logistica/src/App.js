import React, { useState } from 'react';

const LoginPage = () => {
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
        <img
          src={require('./img/shawnanggg-kuVTWkSklJ0-unsplash.jpg')} // Ruta de tu imagen
          alt="Login"
          className="image"
        />
      </div>
      <div className="formContainer">
        <h2>Ingresa los siguientes datos</h2>
        <input
          type="text"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputCorreo"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputPassword"
        />
        <p className="text">Ingresa los siguientes datos</p>
        <p className="errorText">{errorMessage}</p>
        <button className='btnIniciar' onClick={login}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default LoginPage;
