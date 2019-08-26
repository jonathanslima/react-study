import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../Components/CompareList/index";

export default class Main extends Component {
	state = {
		repos: [],
		reposInput: ""
	};

	callRepos = e => {
		e.preventDefault();

		fetch(`https://api.github.com/repos/${this.state.reposInput}`)
			.then(res => res.json())
			.then(obj => {
				this.setState({
					repos: [...this.state.repos, obj]
				});
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<Container>
				<img className="logo" src={Logo} alt="github compare" />
				<Form onSubmit={this.callRepos}>
					<input
						type="text"
						placeholder={this.state.reposInput}
						onChange={e => this.setState({ reposInput: e.target.value })}
					/>
					<button type="submit">ok</button>
				</Form>

				<CompareList repos={this.state.repos} />
			</Container>
		);
	}
}
