import React, {Component} from 'react';

class CavaleiroImg extends Component{
	static defaultProps = {
		url: "https://bit.ly/32MUrKT",
		description: "Knights of Zodiac"
	}

	render(){
		return (
			<picture>
				<img height="150" className="knight-zodiac" src={this.props.url} alt={this.props.description}/>
			</picture>
		)
	}
}

export default CavaleiroImg;
