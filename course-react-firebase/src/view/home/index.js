import React from 'react';
import './home.css';

import Navbar from '../../components/navbar';
import EventoCard from '../../components/evento-card'

import firebase from '../../config/firebase';
import { useState, useEffect } from 'react';

function Home() {
	const [eventos, setEventos] = useState([]);
	let listaEventos = [];

	useEffect(() => {
		firebase.firestore().collection('eventos').get().then(async (resultados) => {
			await resultados.docs.forEach(doc => {
				listaEventos.push({
					id: doc.id,
					...doc.data()
				})
			})

			setEventos(listaEventos);
		})
	}, [])

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					{eventos.map(item => <EventoCard id={item.id} titulo={item.titulo} img={item.foto} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
				</div>
			</div>
		</>
	);
}

export default Home;
