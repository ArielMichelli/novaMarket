import React from 'react'

export default function Layout({ children, cartCount = 0 }) {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-inner">
          <h1>Mi eCommerce</h1>
          <div className="cart-badge">Carrito: {cartCount}</div>
        </div>
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">© {new Date().getFullYear()} Mi eCommerce</footer>
    </div>
  )
}
