import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
	const [name, setName] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	function submit(e) {
		e.preventDefault();
		login(name || "Usuario");
		const from = location.state?.from?.pathname || "/";
		navigate(from, { replace: true });
	}

	return (
		<div style={{ maxWidth: 640, margin: "2rem auto" }}>
			<h2>Iniciar sesión</h2>
			<form onSubmit={submit}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Tu nombre"
				/>
				<button type="submit">Entrar</button>
			</form>
		</div>
	);
}
