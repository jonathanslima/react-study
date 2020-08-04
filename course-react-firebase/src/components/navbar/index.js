import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Navbar() {
	const dispatch = useDispatch();
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<span className="navbar-brand text-white font-weight-bold">
					Eventos
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars text-white"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home{" "}
							</Link>
						</li>
						{useSelector((state) => state.usuarioLogado > 0) ? (
							<>
								<li className="nav-item active">
									<Link className="nav-link" to="/evento-cadastro">
										Publicar Evento
									</Link>
								</li>
								<li className="nav-item active">
									<Link className="nav-link" to="/eventos/meus">
										Meus Eventos
									</Link>
								</li>
								<li className="nav-item active">
									<Link
										className="nav-link"
										onClick={() => {
											dispatch({ type: "LOG_OUT" });
										}}
										to=""
									>
										Sair
									</Link>
								</li>
							</>
						) : (
								<>
									<li className="nav-item active">
										<Link className="nav-link" to="/cadastrar">
											Cadastrar{" "}
										</Link>
									</li>
									<li className="nav-item active">
										<Link className="nav-link" to="/login">
											Login{" "}
										</Link>
									</li>
								</>
							)}
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
