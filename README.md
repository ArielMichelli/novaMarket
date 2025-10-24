# Mi eCommerce (Vite + React)

Mini tienda creada con Vite + React — demo con listado de productos, carrito persistente y rutas.

---

## 🚀 Tecnologías

- Vite (bundler rápido)
- React 19
- React Router (opcional, pendiente de instalar)
- Fetch API para consumir datos (se usa `https://fakestoreapi.com` como ejemplo)
- CSS simple con componentes estilizados

Dependencias (ver `package.json`):

- react
- react-dom
- vite

---

## ⚙️ Estructura del proyecto

```
src/
├─ components/        # Layout, ProductList, Cart, etc.
├─ data/              # datos de ejemplo / fallback
├─ App.jsx            # App principal, estado del carrito
├─ main.jsx           # Entrada
```

---

## 🧩 Qué implementa esta demo

- Listado de productos (traídos desde una API pública con fallback local)
- Carrito con agregación, incremento/decremento, eliminar y vaciar
- Persistencia del carrito en `localStorage`
- Estado de carga y manejo básico de errores
- Layout simple y cards de producto responsivas

---

## 🧪 Comandos útiles

En la raíz del proyecto:

```bash
# Instalar dependencias
npm install

# Levantar dev server
npm run dev

# Generar build de producción
npm run build

# Previsualizar la build
npm run preview
```

---

## 🗂 Notas para desarrollo

- La app intenta leer productos desde `https://fakestoreapi.com/products?limit=8`. Si falla, usa los datos en `src/data/products.js`.
- Si quieres integrar tu propia API, actualiza la URL en `src/App.jsx` y ajusta el mapeo de campos (`id`, `title/name`, `price`, `description`, `image`).
- Para añadir rutas (p. ej. `react-router-dom`) instala `react-router-dom` y modifica `main.jsx` / `App.jsx`.

---

## 📦 Siguientes pasos sugeridos

- Añadir tests unitarios para la lógica del carrito
- Mejorar UI con TailwindCSS o una librería de componentes
- Integrar autenticación / backend para persistencia remota del carrito
- Deploy en Netlify / Vercel / GitHub Pages

---

Si querés, subo este repo a GitHub por vos (requiere que me pases el remote o crear un repo nuevo) y configuro el deploy automático.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
