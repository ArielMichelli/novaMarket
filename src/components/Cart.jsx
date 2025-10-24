import React from "react";

export default function Cart({
	items,
	onRemove,
	onIncrement,
	onDecrement,
	onClear,
}) {
	const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

	return (
		<aside className="cart">
			<h2>Carrito</h2>
			{items.length === 0 ? (
				<p>El carrito está vacío.</p>
			) : (
				<ul>
					{items.map((it) => (
						<li key={it.id} className="cart-item">
							<div className="cart-item-left">
								<img
									className="cart-thumb"
									src={it.image}
									alt={it.name}
									loading="lazy"
									onError={(e) =>
										(e.target.src = "/placeholder-100.png")
									}
								/>
								<div className="cart-item-info">
									<div>
										<strong>{it.name}</strong>
									</div>
									<div className="cart-controls">
										<button
											onClick={() =>
												onDecrement &&
												onDecrement(it.id)
											}
										>
											-
										</button>
										<span className="cart-qty">
											{it.quantity}
										</span>
										<button
											onClick={() =>
												onIncrement &&
												onIncrement(it.id)
											}
										>
											+
										</button>
										<button
											className="cart-remove"
											onClick={() =>
												onRemove && onRemove(it.id)
											}
											aria-label={`Eliminar ${it.name}`}
											title={`Eliminar ${it.name}`}
										>
											<span
												className="cart-remove-icon"
												aria-hidden="true"
											>
												×
											</span>
										</button>
									</div>
								</div>
							</div>
							<div className="cart-item-right">
								<strong>
									${(it.price * it.quantity).toFixed(2)}
								</strong>
							</div>
						</li>
					))}
				</ul>
			)}
			<div className="cart-total">Total: ${total.toFixed(2)}</div>
			{items.length > 0 && (
				<div className="cart-actions">
					<button
						className="btn-danger"
						onClick={() => onClear && onClear()}
					>
						Vaciar carrito
					</button>
				</div>
			)}
		</aside>
	);
}
