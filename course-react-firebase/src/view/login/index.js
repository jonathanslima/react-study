import React, { useState } from "react";
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [msgTipo, setMsgTipo] = useState();

	const dispatch = useDispatch();

	function logar() {
		firebase.auth().signInWithEmailAndPassword(email, senha)
			.then(() => {
				setMsgTipo('sucesso')
				dispatch({
					type: 'LOG_IN',
					usuarioEmail: email
				})
			})
			.catch(() => {
				setMsgTipo('erro');
				console.error('Erro na autenticação do usuário. Checar senha e login.')
			})
	}
	return (
		<div className="d-flex login-content align-items-center justify-content-center">
			{
				useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/" /> : null
			}
			<form className="form-signin mx-auto">
				<h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold text-center">Please sign in</h1>
				<input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email address" />

				<input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />

				<button onClick={logar} className="btn btn-lg btn-login btn-block" type="button">Sign in</button>

				<div className="msg-login text-white my-5 text-center">
					{msgTipo === 'sucesso' && <span>Você está conectado! <span aria-label="you're in" role="img">&#128526;</span></span>}
					{msgTipo === 'erro' && <span>Verifique se os dados estão corretos. <span aria-label="you're in" role="img">&#128546;</span></span>}
				</div>

				<div className="opcoes-login my-5">
					<Link to="/recuperar-senha" className="mx-2">Recuperar senha</Link>
					<span className="text-white">&#9733;</span>
					<Link to='cadastrar' className="mx-2">Quero cadastrar</Link>
				</div>
			</form>
		</div>
	);
}

export default Login;
