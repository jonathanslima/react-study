import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./store/";
import { Provider } from "react-redux";

// import pages
import Login from "./view/login";
import NovoUsuario from "./view/usuario-novo";
import Home from "./view/home";
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha';
import EventoCadastro from './view/evento-cadastro'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/cadastrar" component={NovoUsuario} />
				<Route exact path="/recuperar-senha" component={UsuarioRecuperarSenha}></Route>
				<Route exact path="/evento-cadastro" component={EventoCadastro}></Route>
				<Route exact path="/eventos/:parametro" component={Home}></Route>
			</Router>
		</Provider>
	);
}

export default App;
