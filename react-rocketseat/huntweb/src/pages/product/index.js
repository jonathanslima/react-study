import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api'
import './styles.css'

class Product extends Component{
  state = {
    product: {}
  }

  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await api.get(`products/${id}`);

    this.setState({
      product: response.data
    });
  }

  render(){
    const {product} = this.state;
    return (
      <div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          
          <div><a href={product.url}>{product.url}</a></div>
        </div>

        <Link className="goback" to={`/`}>Voltar</Link>
      </div>

    )
  }
}

export default Product;