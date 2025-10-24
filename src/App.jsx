import { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import productsFallback from './data/products'

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Cargar productos desde API pública; usar fallback si falla
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetch('https://fakestoreapi.com/products?limit=8', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta de la API')
        return res.json()
      })
      .then((data) => {
        // Normalizar campos sencillos para nuestra UI (usar title como name)
        const mapped = data.map((p) => ({ id: p.id, name: p.title, price: Number(p.price), description: p.description }))
        setProducts(mapped)
        setError(null)
      })
      .catch((err) => {
        console.warn('Fetch productos falló, usando fallback local:', err)
        setProducts(productsFallback)
        setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  // Persistencia del carrito en localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('miapp_cart')
      if (saved) setCart(JSON.parse(saved))
    } catch (e) {
      console.warn('No se pudo leer el carrito del localStorage', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('miapp_cart', JSON.stringify(cart))
    } catch (e) {
      console.warn('No se pudo guardar el carrito en localStorage', e)
    }
  }, [cart])

  function handleAdd(product) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function handleRemove(id) {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  function handleIncrement(id) {
    setCart((prev) => prev.map((p) => p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
  }

  function handleDecrement(id) {
    setCart((prev) => prev
      .map((p) => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
      .filter((p) => p.quantity > 0)
    )
  }

  function handleClear() {
    setCart([])
    try {
      localStorage.removeItem('miapp_cart')
    } catch (e) {
      console.warn('No se pudo limpiar localStorage', e)
    }
  }

  const itemCount = cart.reduce((s, it) => s + it.quantity, 0)

  return (
    <Layout cartCount={itemCount}>
      <div className="store">
        <ProductList products={products} onAdd={handleAdd} loading={loading} error={error} />
  <Cart items={cart} onRemove={handleRemove} onIncrement={handleIncrement} onDecrement={handleDecrement} onClear={handleClear} />
      </div>
    </Layout>
  )
}

export default App
