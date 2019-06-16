import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

class Main extends Component{
  state = {
    products: [],
    productInfo: {},
    page: 1
  }

  prevPage = ()=> {
    const { page, productInfo } = this.state;
    console.log(page, productInfo)

    if(page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber)
  }

  nextPage = ()=> {
    const { page, productInfo } = this.state;
    if(page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber)
  }

  // lifecycle for when show component
  componentDidMount(){
    this.loadProducts();
  }

  // using arrow function's syntax, you won't subscribe 'this' value
  loadProducts = async (page = 1)=> {
    const response = await api.get(`/products?page=${page}`);
    const {docs, ...productInfo} = response.data;

    this.setState({
      products: docs,
      productInfo,
      page
    });
    console.log(response);
    console.log(productInfo);
  }

  render(){
    const { products } = this.state;
    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <h2><strong>{product.title}</strong></h2>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}

        <div className="actions">
          <button 
            disabled={this.state.page === 1}
            onClick={this.prevPage}>Anterior</button>
          <button 
            disabled={this.state.page === this.state.productInfo.pages}
            onClick={this.nextPage}>Próximo
          </button>
        </div>
      </div>
    )
  }
}

export default Main;

