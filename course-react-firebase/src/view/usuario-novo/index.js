import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';

import Header from '../../components/navbar'

function NovoUsuario() {

	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	let [msgTipo, setMsgTipo] = useState();
	let [msg, setMsg] = useState();

	function mensagens(res) {
		let msg = {
			'Password should be at least 6 characters': 'Senhas devem ter no mínimo 6 caracteres.',
			'The email address is already in use by another account.': 'O e-mail informado já foi cadastrado.',
			'The email address is badly formatted.': 'O formato do e-mail é invalido!',
			'default': 'Não foi possível cadastrar no momento. Tente novamente mais tarde.'
		};
		return (msg[res] || msg['default']);
	}

	function cadastrar() {
		setMsgTipo(null)

		if (!email || !senha) {
			setMsgTipo('erro')
			setMsg('Favor digitar email e senha!')
			return;
		}

		firebase.auth().createUserWithEmailAndPassword(email, senha)
			.then(() => {
				setMsgTipo('sucesso');
				setMsg('Cadastro realizado com sucesso!')
				console.log(msg)
			})
			.catch((error) => {
				setMsgTipo('erro')
				setMsg(mensagens(error.message))
			})
	}

	return (
		<>
			<Header />
			<div className="form-cadastro">
				<form className="text-center form-login mx-auto mt-5">
					<h1 className="h3 mb-3 text-black font-weight bold">Cadastro</h1>

					<input
						type="email"
						className="form-control my-2"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						className="form-control my-2"
						placeholder="Senha"
						onChange={(e) => setSenha(e.target.value)}
					/>

					<button
						type="button"
						className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
						onClick={cadastrar}
					>
						Cadastrar
					</button>

					<div className="msg-login text-black text-center my-5">
						{msgTipo === 'sucesso' && <span aria-label="happy face" role="img">{msg} &#128526;</span>}
						{msgTipo === 'erro' && <span> <strong>Ops!</strong> {msg} <span aria-label="sad face" role="img">&#128546;</span></span>}
					</div>
				</form>
			</div>
		</>
	);
}

export default NovoUsuario;
