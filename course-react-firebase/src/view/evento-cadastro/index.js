import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";
import "firebase/auth";

import Navbar from "../../components/navbar";

import "./evento-cadastro.css";

function EventoCadastro() {
	const [msgTipo, setMsgTipo] = useState();
	const [titulo, setTitulo] = useState();
	const [tipo, setTipo] = useState();
	const [detalhes, setDetalhes] = useState();
	const [data, setData] = useState();
	const [hora, setHora] = useState();
	const [foto, setFoto] = useState();
	const usuarioEmail = useSelector(state => state.usuarioEmail);

	const storage = firebase.storage();
	const db = firebase.firestore();

	function cadastrar() {
		setMsgTipo(null)

		storage.ref(`imagens/${foto.name}`).put(foto)
			.then(() => {
				db.collection(`eventos`).add({
					titulo,
					tipo,
					detalhes,
					data,
					hora,
					foto: foto.name,
					usuario: usuarioEmail,
					visualizacoes: 0,
					publico: 1,
					criacao: new Date()
				})
			})
			.then(() => {
				setMsgTipo('sucesso')

			})
			.catch(error => {
				setMsgTipo('erro')
			})
	}

	return (
		<>
			<Navbar />

			<div className="col-12">
				<div className="row">
					<h3 className="mt-5 mx-auto font-weight-bold">Novo Evento</h3>
				</div>

				<form action="">
					<div className="form-group">
						<label htmlFor="">Titulo</label>
						<input onChange={e => setTitulo(e.target.value)} type="text" className="form-control" />
					</div>

					<div className="form-group">
						<label htmlFor="">Tipo do evento</label>
						<select className="form-control" onChange={e => setTipo(e.target.value)}>
							<option selected disabled defaultValue="selecione">
								Selecione o tipo
							</option>
							<option defaultValue="confra">Confra</option>
							<option defaultValue="teatro">Teatro</option>
							<option defaultValue="curso">Curso</option>
							<option defaultValue="show">Show</option>
							<option defaultValue="casamentos">Casamentos</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="">Descrição do evento</label>
						<textarea onChange={e => setDetalhes(e.target.value)} className="form-control" rows="3"></textarea>
					</div>

					<div className="form-group row">
						<div className="col-6">
							<label htmlFor="">Data do evento</label>
							<input onChange={e => setData(e.target.value)} type="date" className="form-control" />
						</div>

						<div className="col-6">
							<label htmlFor="">Hora do evento</label>
							<input onChange={e => setHora(e.target.value)} type="time" className="form-control" />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="">Adicionar imagem</label>
						<input onChange={e => setFoto(e.target.files[0])} type="file" className="form-control" />
					</div>

					<button
						type="button"
						className="mt-3 btn btn-lg btn-block mb-1 btn-cadastro"
						onClick={cadastrar}
					>
						Publicar Evento
					</button>
				</form>

				<div className="msg-login text-center mt-3 mb-5">
					{msgTipo === 'sucesso' && <span>Evento publicado!</span>}
					{msgTipo === 'erro' && <span>Não foi possível publicar o evento.</span>}
				</div>
			</div>
		</>
	);
}

export default EventoCadastro;
