import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body{
		background: #9b65e6;
		-webkit-font-smoothing: antialiased !important;
		text-rendering: optimizeLegibility !important;
		font-family: sans-serif;
	}
`
export default globalStyle;
