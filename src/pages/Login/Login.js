import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
      <div className="container-1">
        <img src="https://via.placeholder.com/100" alt="" />
        <form className="form-1" action="">
          <label className="login-label" for="email">
            E-mail
          </label>
          <input className="login-input" type="text" placeholder="E-mail" />
          <label className="login-label" for="password">
            Senha
          </label>
          <input className="login-input" type="password" placeholder="Senha" />
        </form>

        <button id="enter">Entrar</button>
      </div>
    </div>
  );
}

export default Login;
