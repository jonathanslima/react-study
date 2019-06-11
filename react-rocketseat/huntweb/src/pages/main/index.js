import React, { Component } from 'react';
import api from '../../services/api';

class Main extends Component{
  state = {
    products: []
  }

  // lifecycle for when show component
  componentDidMount(){
    // load products
    this.loadProducts();
  }

  // using arrow function's syntax, you won't subscribe 'this' value
  loadProducts = async ()=> {
    const response = await api.get('/products');
    this.setState({products: response.data.docs});
    console.log(response)
    console.log(this.state.products)
  }

  render(){
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    )
  }
}

export default Main;

