import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails({ onAdd }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!id) return;
		setLoading(true);
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				if (!res.ok) throw new Error("Error cargando producto");
				return res.json();
			})
			.then((data) => {
				setProduct({
					id: data.id,
					name: data.title,
					price: Number(data.price),
					description: data.description,
					image: data.image,
				});
				setError(null);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading)
		return (
			<div className="product-details">
				<p>Cargando producto...</p>
			</div>
		);
	if (error)
		return (
			<div className="product-details">
				<p>Error: {error}</p>
			</div>
		);
	if (!product)
		return (
			<div className="product-details">
				<p>Producto no encontrado</p>
			</div>
		);

	return (
		<div className="product-details card">
			<div
				style={{
					display: "flex",
					gap: "1rem",
					alignItems: "flex-start",
				}}
			>
				<div style={{ flex: "0 0 240px" }}>
					<img
						src={product.image}
						alt={product.name}
						loading="lazy"
						onError={(e) => {
							e.currentTarget.onerror = null;
							e.currentTarget.src =
								"https://via.placeholder.com/400x300?text=No+Image";
						}}
						style={{ width: "100%", objectFit: "contain" }}
					/>
				</div>
				<div>
					<h2>{product.name}</h2>
					<p style={{ fontWeight: 700 }}>
						${product.price.toFixed(2)}
					</p>
					<p>{product.description}</p>
					<div
						style={{
							marginTop: "1rem",
							display: "flex",
							gap: "0.5rem",
						}}
					>
						<button
							className="btn-primary"
							onClick={() => onAdd && onAdd(product)}
						>
							Agregar al carrito
						</button>
						<button
							className="btn-secondary"
							onClick={() => navigate("/")}
						>
							Volver
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
