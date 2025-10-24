import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar({ cartCount }) {
	const { user, logout } = useAuth();

	return (
		<div className="nav-wrapper">
			<nav className="nav-inner">
				<div className="nav-left">
					<Link
						to="/"
						className="nav-logo"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
						}}
					>
						<img
							src="/logoTienda.png"
							alt="NovaMarket"
							className="img-logo"
						/>
						<span>NovaMarket</span>
					</Link>
				</div>
				<div className="nav-right">
					<Link to="/checkout" className="nav-link">
						Checkout
					</Link>
					{user ? (
						<>
							<span className="nav-user">{user.name}</span>
							<button onClick={logout} className="btn-secondary">
								Cerrar sesión
							</button>
						</>
					) : (
						<Link to="/login" className="btn-primary">
							Iniciar sesión
						</Link>
					)}
					<div className="cart-indicator">🛒 {cartCount}</div>
				</div>
			</nav>
		</div>
	);
}
