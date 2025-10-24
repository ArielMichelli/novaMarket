import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ children, cartCount = 0 }) {
	return (
		<div className="app-layout">
			<Navbar cartCount={cartCount} />
			<main className="app-main">{children}</main>
			<footer className="app-footer enhanced-footer">
				<div className="footer-inner">
					<div className="footer-brand">
						<img
							src="/logoTienda.png"
							alt="NovaMarket"
							className="brand-logo-small img-logo-small"
						/>
						<div>
							<div className="brand-title">NovaMarket</div>
							<div className="brand-tag">
								Curated goods for curious minds
							</div>
						</div>
					</div>

					<div className="footer-links">
						<div>
							<h4>Empresa</h4>
							<ul>
								<li>
									<a href="#">Sobre nosotros</a>
								</li>
								<li>
									<a href="#">Trabaja con nosotros</a>
								</li>
								<li>
									<a href="#">Términos</a>
								</li>
							</ul>
						</div>
						<div>
							<h4>Soporte</h4>
							<ul>
								<li>
									<a href="#">Contacto</a>
								</li>
								<li>
									<a href="#">Preguntas frecuentes</a>
								</li>
								<li>
									<a href="#">Envíos</a>
								</li>
							</ul>
						</div>
						<div>
							<h4>Síguenos</h4>
							<div className="socials">
								<a
									href="#"
									aria-label="Twitter"
									className="social-icon"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.4-1.4.7-2.1.9-.6-.6-1.4-1-2.3-1-1.8 0-3.2 1.6-2.9 3.3-2.4-.1-4.5-1.3-5.9-3.1-.8 1.4-.3 3.3 1.1 4.2-.5 0-1-.2-1.4-.4 0 1.5 1 2.7 2.4 3-.5.1-1 .1-1.5 0 .4 1.3 1.6 2.3 3 2.3-1.1.9-2.5 1.4-4 1.4-.3 0-.6 0-.9-.1 1.5 1 3.4 1.6 5.3 1.6 6.3 0 9.7-5.2 9.7-9.7v-.4c.6-.4 1.1-.9 1.5-1.4-.6.3-1.3.5-2 .6z"
											fill="#cbd5e1"
										/>
									</svg>
								</a>
								<a
									href="#"
									aria-label="Instagram"
									className="social-icon"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="3"
											y="3"
											width="18"
											height="18"
											rx="5"
											stroke="#cbd5e1"
											strokeWidth="1.2"
										/>
										<path
											d="M16 11.9a4 4 0 1 1-7.999.2 4 4 0 0 1 7.999-.2z"
											stroke="#cbd5e1"
											strokeWidth="1.2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<circle
											cx="17.5"
											cy="6.5"
											r="0.5"
											fill="#cbd5e1"
										/>
									</svg>
								</a>
								<a
									href="#"
									aria-label="Facebook"
									className="social-icon"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18 2h-3a4 4 0 0 0-4 4v3H8v3h3v7h3v-7h2.4l.6-3H14V6a1 1 0 0 1 1-1h3V2z"
											fill="#cbd5e1"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					© {new Date().getFullYear()} NovaMarket — Hecho con Vite +
					React
				</div>
			</footer>
		</div>
	);
}
