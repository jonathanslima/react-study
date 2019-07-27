import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './components/button/index';
import Anchor from './components/anchor/index';
import ListaCavaleiros from './components/listaCavaleiros/index';

import './css/button.scss';
import './css/listaCavaleiros.scss';

class App extends Component {
	state = {
	  valueState: 0,
	};

	add1ToState = () => {
	  this.setState({ valueState: this.state.valueState + 1 });
	};

	showAlert() {
	  alert('Rocket seat');
	}

	render() {
	  return (
	  // fragment ou div
  <div>
    <h1>Hello World!</h1>
    <Button title="Salvar" click={this.showAlert}>
					Enviar
    </Button>
    <Button title="Salvar" click={this.add1ToState}>
					Value =
      {' '}
      {this.state.valueState}
    </Button>
    <Anchor link="https://www.google.com">Google</Anchor>
    <Anchor link="https://www.facebook.com">facebook</Anchor>
    <ListaCavaleiros />
  </div>
	  );
	}
}

render(<App />, document.querySelector('#app'));
