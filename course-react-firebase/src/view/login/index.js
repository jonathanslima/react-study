import React, { useState } from "react";
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  
  function logar(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(()=> setMsgTipo('sucesso'))
      .catch(()=> {
        setMsgTipo('erro');
        console.error('Erro na autenticação do usuário. Checar senha e login.')
      })
  }
  return (
    <div className="d-flex login-content align-items-center justify-content-center">
      <form className="form-signin mx-auto">
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold text-center">Please sign in</h1>
        <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email address" />

        <input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />

        <button onClick={logar} className="btn btn-lg btn-login btn-block" type="button">Sign in</button>
        
        <div className="msg-login text-white my-5 text-center">
          { msgTipo == 'sucesso' && <span>Você está conectado! &#128526;</span> }
          { msgTipo == 'erro' && <span>Verifique se os dados estão corretos. &#128546;</span> }
        </div>

        <div className="opcoes-login my-5">
          <a href="#" className="mx-2">Recuperar senha</a>
          <span className="text-white">&#9733;</span>
          <Link to='cadastrar' className="mx-2">Quero cadastrar</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
