import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase'

import './evento-card.css';

function EventoCard({ id, img, titulo, detalhes, visualizacoes }) {

	const [urlImage, setUrlImage] = useState();

	useEffect(() => {
		firebase.storage().ref(`imagens/${img}`).getDownloadURL()
			.then(url => setUrlImage(url))
	}, [titulo])
	return (
		<div key={id} className="col-md-3 col-sm-12 block-card">
			<img src={urlImage} alt="" className="card-img-top img-cartao" />

			<div className="card-body">
				<h5>{titulo}</h5>
				<p className="card-text text-justify">{detalhes}</p>

				<div className="row rodape-card d-flex align-items-center">
					<div className="col-6">
						<Link to={`/eventos/meus`} className="btn btn-sm btn-detalhes">+ detalhes </Link>
					</div>

					<div className="col-6 text-right">
						<i className="fas fa-eye"></i> <span>{visualizacoes}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EventoCard;
