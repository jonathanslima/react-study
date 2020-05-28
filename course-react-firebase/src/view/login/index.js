import React from "react";
import './login.css';

function login() {
  return (
    <div className="d-flex login-content align-items-center justify-content-center">
      <form className="form-signin mx-auto">
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold text-center">Please sign in</h1>
        <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email address" />

        <input type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />

        <button className="btn btn-lg btn-login btn-block" type="submit">Sign in</button>
        
        <div className="msg-login text-white my-5 text-center">
          <span>Você está conectado! &#128526;</span><br />
          <span>Verifique se os dados estão corretos. &#128546;</span>
        </div>

        <div className="opcoes-login my-5">
          <a href="#" className="mx-2">Recuperar senha</a>
          <span className="text-white">&#9733;</span>
          <a href="#" className="mx-2">Quero cadastrar</a>
        </div>
      </form>
    </div>
  );
}

export default login;
