import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function Checkout() {
	const { user } = useAuth();
	return (
		<div style={{ maxWidth: 800, margin: "2rem auto" }}>
			<h2>Checkout</h2>
			<p>Hola {user?.name}, aquí podrías completar la compra (demo).</p>
		</div>
	);
}
