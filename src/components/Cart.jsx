import React from 'react'

export default function Cart({ items, onRemove, onIncrement, onDecrement, onClear }) {
  const total = items.reduce((s, it) => s + it.price * it.quantity, 0)

  return (
    <aside className="cart">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((it) => (
            <li key={it.id} className="cart-item">
              <div>
                <div><strong>{it.name}</strong></div>
                <div className="cart-controls">
                  <button onClick={() => onDecrement && onDecrement(it.id)}>-</button>
                  <span className="cart-qty">{it.quantity}</span>
                  <button onClick={() => onIncrement && onIncrement(it.id)}>+</button>
                  <button className="cart-remove" onClick={() => onRemove && onRemove(it.id)}>Eliminar</button>
                </div>
              </div>
              <div>
                <strong>${(it.price * it.quantity).toFixed(2)}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
      {items.length > 0 && (
        <div className="cart-actions">
          <button className="btn-danger" onClick={() => onClear && onClear()}>Vaciar carrito</button>
        </div>
      )}
    </aside>
  )
}
