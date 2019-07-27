import React from 'react';
import propTypes from 'prop-types';

const Button = (props)=> (
	<button className="button" onClick={props.click}>
		{/* {props.title}  */}
		{props.children}
	</button>
)

Button.defaultProps = {
	children: 'Salvar'
}

Button.propTypes = {
	click: propTypes.func.isRequired,
}

export default Button;
