import React from 'react';
import Main from '../pages/main';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Product from '../pages/product'

const routes = ()=> (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/products/:id' component={Product} />  
    </Switch>
  </BrowserRouter>
)

export default routes;