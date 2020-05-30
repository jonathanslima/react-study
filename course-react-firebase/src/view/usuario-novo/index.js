import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';

function NovoUsuario() {

	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [msgTipo, setMsgTipo] = useState();
	const [msg, setMsg] = useState();

	function cadastrar(){
		setMsgTipo(null)

		if(!email || !senha){
			setMsgTipo('erro')
			setMsg('Favor digitar email e senha!')
			return;
		}

		firebase.auth().createUserWithEmailAndPassword(email, senha)
			.then(()=>{
				setMsgTipo = 'sucesso'
			})
			.catch((error)=>{
				console.log(error.message)
				switch(error.message){
					case 'Password should be at least 6 characters':
						setMsg('Senhas devem ter no mínimo 6 caracteres.');
						break;

					case 'The email address is already in use by another account.':
						setMsg('O e-mail informado já foi cadastrado.');
						break;

					case 'The email address is badly formatted.':
						setMsg('O formato do e-mail é invalido!');
						break;

					default:
						setMsg('Não foi possível cadastrar no momento. Tente novamente mais tarde.');
						break;
				}

			})
	}

	return (
		<div className="form-cadastro">
			<form className="text-center form-login mx-auto mt-5">
				<h1 className="h3 mb-3 text-black font-weight bold">Cadastro</h1>

				<input 
					type="email" 
					className="form-control my-2" 
					placeholder="Email"
					onChange={ (e)=> setEmail(e.target.value) }
				/>

				<input 
					type="password" 
					className="form-control my-2" 
					placeholder="Senha"
					onChange={ (e)=> setSenha(e.target.value) }
				/>

				<button	
					type="button" 
					className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
					onClick={cadastrar}
				>	
					Cadastrar
				</button>

				<div className="msg-login text-black text-center my-5">
					{ msgTipo == 'sucesso' && <span>Cadastro realizado com sucesso! &#128526;</span> }
					{ msgTipo == 'erro' && <span> <strong>Ops!</strong> {msg} &#128546;</span> }
				</div>
			</form>
		</div>
	);
}

export default NovoUsuario;