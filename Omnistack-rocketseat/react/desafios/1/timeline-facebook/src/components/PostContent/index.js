import React, { Component } from 'react';
import '../../styles/post.css';

export default class postContent extends Component {
	render() {
		const article = this.props.article;
		return (
			<article className="post">{article}</article>
		);
	}
}
