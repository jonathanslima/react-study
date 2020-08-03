import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './evento-card.css';

function EventoCard() {
	return (
		<div className="col-md-3 col-sm-12 block-card">
			<img src="http://via.placeholder.com/100x50" alt="" className="card-img-top img-cartao" />

			<div className="card-body">
				<h5>Título do Evento</h5>
				<p className="card-text text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aut odio quas neque voluptas dolor quibusdam nisi iusto, a quidem, alias ea ullam dignissimos nihil. Doloremque atque voluptatem suscipit asperiores.</p>

				<div className="row rodape-card d-flex align-items-center">
					<div className="col-6">
						<Link to="/" className="btn btn-sm btn-detalhes">+ detalhes </Link>
					</div>

					<div className="col-6 text-right">
						<i className="fas fa-eye"></i><span>2019</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EventoCard;
