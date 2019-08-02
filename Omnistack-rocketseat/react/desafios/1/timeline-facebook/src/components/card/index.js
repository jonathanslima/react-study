import React, { Component } from 'react';
import PostHeader from '../PostHeader/index';
import PostContent from '../postContent/index';

export default class Card extends Component {
	render() {
		const key = this.props.data.id;
		const post = this.props.data;
		const article = this.props.data.body;

		return (
			<div>
				<section key={key} className="card">
					<PostHeader post={post} />
					<PostContent article={article} />
				</section>
			</div>
		)
	}
}
