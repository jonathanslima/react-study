import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./store/";
import { Provider } from "react-redux";

// import pages
import Login from "./view/login";
import NovoUsuario from "./view/usuario-novo";
import Home from "./view/home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastrar" component={NovoUsuario} />
      </Router>
    </Provider>
  );
}

export default App;
