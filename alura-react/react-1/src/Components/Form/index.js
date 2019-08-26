import React, { Component } from 'react';

// import { Container } from './styles';

export default class Form extends Component {
	constructor(props){
		super(props)

		this.stateInicial = {
			nome: '',
			livro: '',
			preco: ''
		}

		this.state = this.stateInicial;
		this.submitForm = this.submitForm.bind(this);
	}

	ouvinteEvento = event => {
		const {name, value} = event.target;
		console.log(name, value)
		// if(name === 'nome'){this.setState({ nome: value })}
		// if(name === 'livro'){this.setState({ livro: value })}
		// if(name === 'preco'){this.setState({ preco: value })}
		// syntax sugar
		this.setState({
			[name]: value
		})
	}

	submitForm(props) {
		this.props.ouvinteSubmit(this.state);
		this.setState(this.stateInicial);
	}

	render() {
		const { nome, livro, preco } = this.state;
		return (
			<form>
				<div className="row">
					<div className="input-field col s4">
						<label className="input-field" htmlFor="nome">Nome</label>
						<input
							className="validate"
							id="nome"
							type="text"
							name="nome"
							value={nome}
							onChange={this.ouvinteEvento}
						/>
					</div>

					<div className="input-field col s4">
						<label className="input-field" htmlFor="livro">Livro</label>
						<input
							className="validate"
							id="livro"
							type="text"
							name="livro"
							value={livro}
							onChange={this.ouvinteEvento}
						/>
					</div>

					<div className="input-field col s4">
						<label className="input-field" htmlFor="preco">Preço</label>
						<input
							className="validate"
							id="preco"
							type="text"
							name="preco"
							value={preco}
							onChange={this.ouvinteEvento}
						/>
					</div>
				</div>
				<button 
					onClick={this.submitForm} 
					className="waves-effect waves-light indigo lighten-2 btn" type="button"
				>Salvar</button>
			</form>
		);
	}
}
