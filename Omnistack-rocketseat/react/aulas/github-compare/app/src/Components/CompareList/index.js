import React, { Component } from 'react';

//CSS
import { Container, Repository } from './styles';

export default class CompareList extends Component {
	render() {
		let props = this.props.repos;

		return (
			<Container>
				{console.log('props', props)}
				<Repository>
					<header>
						<img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="facebook logo"/>
						<strong>react</strong>
						<small>facebook</small>
					</header>

					<ul>
						<li>0,00 <small>stars</small></li>
						<li>0,00 <small>forks</small></li>
						<li>0,00 <small>issues</small></li>
						<li>3 days ago <small>last commit</small></li>
					</ul>
				</Repository>
			</Container>
		);
	}
}
