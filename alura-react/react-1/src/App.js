import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

// COMPONENTS
import Header from './Components/Header'
import TableBooks from './Components/tableBooks'
import Form from './Components/Form'

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  };

  removeItem = (index)=>{
    const {autores} = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual)=> {
        return posAtual !== index;
      })
    });
  }

  ouvinteSubmit = (autor)=> {
    this.setState({
      autores: [...this.state.autores, autor]
    })
  }

  render(){  
    return (
      <Fragment>
        <Header />
        <div className="container">
          <TableBooks autores={this.state.autores} remover={this.removeItem} />
          <Form ouvinteSubmit={this.ouvinteSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
