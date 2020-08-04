import React from 'react';
import './home.css';

import Navbar from '../../components/navbar';
import EventoCard from '../../components/evento-card'

import firebase from '../../config/firebase';
import { useState, useEffect } from 'react';

function Home() {
	const [eventos, setEventos] = useState([]);
	const [pesquisa, setPesquisa] = useState('');
	let listaEventos = [];

	useEffect(() => {
		firebase.firestore().collection('eventos').get().then(async (resultados) => {
			await resultados.docs.forEach(doc => {
				if (doc.data().titulo.indexOf(pesquisa) >= 0) {
					listaEventos.push({
						id: doc.id,
						...doc.data()
					})
				}
			})

			setEventos(listaEventos);
		})
	}, [pesquisa])

	return (
		<>
			<Navbar />
			<div className="row p-5">
				<input type="text" onChange={(e) => setPesquisa(e.target.value)} className="form-control" placeholder="Pesquisar evento pelo título..." />
			</div>

			<div className="container-fluid">
				<div className="row">
					{eventos.map(item => <EventoCard id={item.id} titulo={item.titulo} img={item.foto} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
				</div>
			</div>
		</>
	);
}

export default Home;
