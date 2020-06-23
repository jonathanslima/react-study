import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "firebase";
import "firebase/auth";

import Navbar from "../../components/navbar";

import "./evento-cadastro.css";

function EventoCadastro() {
	const [msgTipo, setMsgTipo] = useState();

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
						<input type="text" className="form-control" />
					</div>

					<div className="form-group">
						<label htmlFor="">Tipo do evento</label>
						<select className="form-control">
							<option selected disabled value>
								Selecione o tipo
							</option>
							<option value="confra">Confra</option>
							<option value="teatro">Teatro</option>
							<option value="show">Show</option>
							<option value="casamentos">Casamentos</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="">Descrição do evento</label>
						<textarea className="form-control" rows="3"></textarea>
					</div>

					<div className="form-group row">
						<div className="col-6">
							<label htmlFor="">Data do evento</label>
							<input type="date" className="form-control" />
						</div>

						<div className="col-6">
							<label htmlFor="">Hora do evento</label>
							<input type="time" className="form-control" />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="">Adicionar imagem</label>
						<input type="file" className="form-control" />
					</div>

					<button
						type="button"
						className="mt-3 btn btn-lg btn-block mb-1 btn-cadastro"
					>
						Publicar Evento
					</button>
				</form>

				<div className="msg-login text-center mt-3 mb-5">
					{ msgTipo === 'sucesso' && <span>Evento publicado!</span> }
					{ msgTipo === 'erro' && <span>Não foi possível publicar o evento.</span> }
				</div>
			</div>
		</>
	);
}

export default EventoCadastro;
