import React from "react";
import { Link } from "react-router-dom";

function truncate(text, n = 100) {
	if (!text) return "";
	return text.length > n ? text.slice(0, n) + "…" : text;
}

const Placeholder = () => (
	<div className="product-image placeholder" aria-hidden>
		<svg
			width="64"
			height="64"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#9ca3af"
			strokeWidth="1.5"
		>
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M7 14l3-3 4 4 3-5" />
		</svg>
	</div>
);

export default function ProductList({ products, onAdd, loading, error }) {
	if (loading)
		return (
			<div className="product-list">
				<h2>Productos</h2>
				<p>Cargando...</p>
			</div>
		);
	if (error)
		return (
			<div className="product-list">
				<h2>Productos</h2>
				<p>Error cargando productos: {error}</p>
			</div>
		);

	return (
		<div className="product-list">
			<h2>Productos</h2>
			<ul className="product-grid">
				{products.map((p) => (
					<li key={p.id} className="product-card">
						{p.image ? (
							<Link
								to={`/product/${p.id}`}
								className="product-image"
							>
								<img
									src={p.image}
									alt={p.name}
									loading="lazy"
									onError={(e) => {
										e.currentTarget.onerror = null;
										e.currentTarget.src =
											"https://via.placeholder.com/400x300?text=No+Image";
									}}
								/>
							</Link>
						) : (
							<Link
								to={`/product/${p.id}`}
								className="product-image"
							>
								<Placeholder />
							</Link>
						)}

						<div className="product-body">
							<div className="product-row">
								<h3 className="product-title">
									<Link to={`/product/${p.id}`}>
										{p.name}
									</Link>
								</h3>
								<div className="product-price">
									${(p.price || 0).toFixed(2)}
								</div>
							</div>
							<p className="product-desc">
								{truncate(p.description, 120)}
							</p>
							<div className="product-actions">
								<button
									className="btn-primary"
									onClick={() => onAdd(p)}
								>
									Agregar al carrito
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
