import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

// import pages
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';

function App() {
  return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastrar' component={NovoUsuario} />
      </Router>
  );
}

export default App;
