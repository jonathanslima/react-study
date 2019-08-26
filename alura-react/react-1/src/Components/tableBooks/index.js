import React, { Component } from 'react';

// import { Container } from './styles';
const TableHead = ()=> {
	return (
		<thead>
			<tr>
				<th>Autores</th>
				<th>Livros</th>
				<th>Preços</th>
				<th>REMOVER</th>
			</tr>
		</thead>
	);
};

const TableBody = (props)=> {
	const linhas = props.autores.map((linha, index) => {
		const {nome, livro, preco} = linha;
		return (
			<tr key={index}>
				<td>{nome}</td>
				<td>{livro}</td>
				<td>{preco}</td>
				<td>
					<button 
						onClick={()=> props.remover(index)}
						className="waves-effect waves-light indigo lighten-2 btn"
					>x
					</button>
					</td>
			</tr>	
		);
	});


	return (
		<tbody>
			{linhas}
		</tbody> 
	)
}

export default class TableBooks extends Component {
	render() {
		const {autores, remover} = this.props;
		return (
			<table className="centered highlight">
        <TableHead />
				<TableBody autores={autores} remover={remover} />
      </table>
		);
	}
}
