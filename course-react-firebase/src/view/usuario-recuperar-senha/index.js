import React, { useState } from "react";
import "./usuario-recuperar-senha.css";

import { Link } from "react-router-dom";
import firebase from "../../config/firebase";
import "firebase/auth";

import Navbar from "../../components/navbar";

function UsuarioRecuperarSenha() {
	const [email, setEmail] = useState();
	const [msg, setMsg] = useState();

	function recuperarSenha(e) {
		e.preventDefault();
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then((res) => {
				setMsg(
					"Enviamos um link para seu email para você redefinir sua senha!"
				);
			});
	}

	return (
		<>
			<Navbar />
			<form action="" className="text-center form-login mx-auto mt-5">
				<h1 className="mb-3 font-weight-bold">Recuperar Senha</h1>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					className="form-control my-2"
					placeholder="email"
				/>

				<div className="msg my-4">
					<span>{msg}</span>
				</div>
				<button
					onClick={recuperarSenha}
					className="btn btn-lg btn-block btn-enviar"
				>
					Recuperar Senha
				</button>
			</form>
		</>
	);
}

export default UsuarioRecuperarSenha;
