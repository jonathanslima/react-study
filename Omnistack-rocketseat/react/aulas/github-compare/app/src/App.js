import React, {Fragment, Component} from 'react';
import GlobalStyle from './styles/global';

// main component
import Main from './pages/Main/index'

class App extends Component{
	render(){
		return (
			<Fragment>
				<div className="App">
					<GlobalStyle />
					<Main />
				</div>
			</Fragment>
		);
	}
}

export default App;
