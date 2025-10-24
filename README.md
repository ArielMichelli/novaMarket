<div align="center">

# 🛒 NovaMarket

### Tu eCommerce moderno construido con React + Vite

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-ca4245?logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Una demo completa de tienda online con carrito de compras inteligente, rutas protegidas, autenticación simulada y diseño responsivo. Consume datos en vivo desde FakeStore API con fallback local.

[Demo en vivo](#) · [Reportar Bug](https://github.com/tuusuario/mi-app/issues) · [Solicitar Feature](https://github.com/tuusuario/mi-app/issues)

</div>

---

## ✨ Características principales

### 🛍️ Experiencia de compra completa

-   **Catálogo dinámico**: 20+ productos cargados desde API REST (FakeStore API)
-   **Carrito inteligente**: Incremento/decremento, eliminar items y vaciar carrito completo
-   **Miniaturas visuales**: Vista previa de productos dentro del carrito con imágenes optimizadas
-   **Persistencia**: Tu carrito se guarda automáticamente en `localStorage`
-   **Cálculo en tiempo real**: Total actualizado instantáneamente

### 🎨 UI/UX moderna

-   **Diseño responsivo**: Adaptado para móvil, tablet y desktop
-   **Animaciones fluidas**: Logo con efecto hover (rotate + scale + shadow)
-   **Navbar interactiva**: Indicador de carrito en tiempo real y estado de sesión visible
-   **Cards atractivas**: Grid adaptativo con imágenes lazy-load y fallback automático
-   **Tema oscuro**: Panel de carrito con fondo oscuro semi-transparente

### 🚀 Navegación y rutas

-   **React Router v6**: Navegación SPA sin recargas
-   **Rutas dinámicas**: Detalle de producto por ID (`/product/:id`)
-   **Rutas protegidas**: Checkout solo accesible para usuarios autenticados
-   **Autenticación simulada**: Login/logout con Context API
-   **Redirección automática**: Usuarios no autenticados van a `/login`

### 🔧 Arquitectura técnica

-   **Componentes modulares**: Separación de responsabilidades (Layout, Navbar, Cart, ProductList, ProductDetails)
-   **Context API**: Estado global de autenticación compartido
-   **Custom Hooks**: `useAuth()` para acceso simple al contexto
-   **Manejo de errores**: Estados de carga, error y fallback local si API falla
-   **Optimización**: Lazy loading de imágenes y código limpio

---

## 📂 Estructura del proyecto

```
mi-app/
├── public/
│   └── logoTienda.png          # Logo animado en navbar y footer
├── src/
│   ├── components/
│   │   ├── Cart.jsx            # Panel lateral con miniaturas y controles
│   │   ├── Layout.jsx          # Wrapper con Navbar y Footer
│   │   ├── Navbar.jsx          # Barra superior con logo animado y auth
│   │   ├── ProductDetails.jsx  # Vista detallada de producto individual
│   │   ├── ProductList.jsx     # Grid de productos con cards
│   │   └── ProtectedRoute.jsx  # HOC para rutas privadas
│   ├── context/
│   │   └── AuthContext.jsx     # Context de autenticación global
│   ├── data/
│   │   └── products.js         # Datos fallback (20 productos)
│   ├── pages/
│   │   ├── Checkout.jsx        # Página protegida de checkout
│   │   └── Login.jsx           # Formulario de login
│   ├── App.css                 # Estilos globales y animaciones
│   ├── App.jsx                 # Componente raíz con rutas y lógica de carrito
│   └── main.jsx                # Entry point (ReactDOM + Router + Auth)
├── package.json
└── vite.config.js
```

---

## 🚀 Inicio rápido

### Prerrequisitos

-   Node.js 18+ y npm instalados

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tuusuario/mi-app.git
cd mi-app

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador. 🎉

### Comandos disponibles

| Comando           | Descripción                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo con HMR          |
| `npm run build`   | Genera build optimizado para producción        |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint`    | Ejecuta ESLint para verificar código           |

---

## 🎯 Flujo de usuario

1. **🏠 Página principal** → Ver catálogo de 20 productos con imágenes y precios
2. **🛒 Agregar al carrito** → Click en "Agregar al carrito" desde cualquier producto
3. **📦 Ver carrito lateral** → Miniaturas, cantidad, precio total y controles (+/−/×)
4. **🔍 Detalle del producto** → Click en el título para ver descripción completa
5. **🔐 Login** → Ingresar nombre para simular autenticación
6. **✅ Checkout** → Acceder a ruta protegida para finalizar compra (requiere login)
7. **🚪 Logout** → Cerrar sesión desde navbar

---

## 🛠️ Tecnologías y librerías

| Tecnología           | Versión | Propósito                                   |
| -------------------- | ------- | ------------------------------------------- |
| **React**            | 19.x    | Librería de UI con hooks modernos           |
| **Vite**             | 7.1.x   | Bundler ultrarrápido con HMR instantáneo    |
| **React Router**     | 6.x     | Enrutamiento declarativo y SPA              |
| **FakeStore API**    | REST    | Fuente de datos de productos en tiempo real |
| **CSS3**             | -       | Estilos custom con animaciones y flexbox    |
| **LocalStorage API** | -       | Persistencia del carrito entre sesiones     |

---

## 🎨 Últimas mejoras implementadas

### 🆕 v1.3.0 (Octubre 2025)

-   ✅ **Miniaturas en carrito**: Cada ítem muestra imagen del producto (48×48px)
-   ✅ **Botón eliminar rediseñado**: Ícono de cruz (×) en lugar de texto, con hover rojo
-   ✅ **Panel de carrito ampliado**: Ancho aumentado a 380px para mejor legibilidad
-   ✅ **Navbar con logo animado**: Logo `/logoTienda.png` con efecto hover (rotate + scale + sombra)
-   ✅ **Optimización de columnas**: Precio ajustado a 90px, nombre truncado con ellipsis
-   ✅ **Fondo oscuro mejorado**: Carrito con `rgba(2,6,23,0.65)` para contraste
-   ✅ **Botón "Cerrar sesión" visible**: Estilos mejorados con borde y hover claro
-   ✅ **Responsive design**: Layout adaptativo para móviles y tablets

### 🔒 v1.2.0

-   Autenticación simulada con Context API
-   Rutas protegidas (Checkout requiere login)
-   Navbar con indicador de sesión y carrito en tiempo real
-   Página de Login con redirección post-autenticación

### 🌐 v1.1.0

-   Integración de React Router con rutas dinámicas
-   Vista de detalle por producto (`/product/:id`)
-   Navegación entre páginas sin recargas
-   Botones "Volver" en vistas de detalle

### 🎨 v1.0.0

-   Lanzamiento inicial con catálogo y carrito funcional
-   Persistencia en localStorage
-   Consumo de API externa con fallback local
-   Layout responsivo con header y footer mejorados

---

## 📸 Capturas (sugeridas)

> 💡 **Tip**: Agrega capturas de pantalla de tu app aquí para mostrar visualmente las funcionalidades.

```markdown
### Página principal

![Catalogo](./screenshots/catalogo.png)

### Carrito con miniaturas

![Carrito](./screenshots/carrito.png)

### Vista de detalle

![Detalle](./screenshots/detalle.png)

### Checkout protegido

![Checkout](./screenshots/checkout.png)
```

---

## 🔧 Personalización

### Cambiar API de productos

Edita `src/App.jsx` y actualiza la URL de fetch:

```jsx
// Línea ~15
const resp = await fetch("https://tu-api.com/productos");
// Ajusta el mapeo de campos según tu API
```

### Modificar colores y estilos

Todos los estilos están centralizados en `src/App.css`. Variables clave:

```css
/* Navbar */
background: linear-gradient(
	90deg,
	rgba(15, 23, 42, 0.92),
	rgba(17, 24, 39, 0.92)
);

/* Carrito */
background: rgba(2, 6, 23, 0.65);

/* Botones primarios */
background: linear-gradient(90deg, #6366f1, #8b5cf6);
```

### Agregar más productos locales

Edita `src/data/products.js` y añade objetos con la estructura:

```js
{
  id: 21,
  name: "Producto nuevo",
  price: 49.99,
  description: "Descripción...",
  image: "/ruta/imagen.jpg",
  rating: { rate: 4.5, count: 120 }
}
```

---

## 🚀 Deploy

### Netlify (recomendado)

```bash
# 1. Crear build
npm run build

# 2. Instalar Netlify CLI
npm install -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=dist
```

### Vercel

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Deploy
vercel --prod
```

### GitHub Pages

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar scripts en package.json
"homepage": "https://tuusuario.github.io/mi-app",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# 3. Deploy
npm run deploy
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tenés ideas para mejorar NovaMarket:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Roadmap

-   [ ] Integrar TypeScript para mayor robustez
-   [ ] Añadir tests unitarios (Vitest) y E2E (Playwright)
-   [ ] Implementar filtros por categoría y búsqueda
-   [ ] Backend real con Node.js + Express
-   [ ] Carrito sincronizado en base de datos
-   [ ] Pasarela de pago (Stripe/MercadoPago)
-   [ ] Sistema de reviews y ratings
-   [ ] Dark/Light mode toggle
-   [ ] Internacionalización (i18n)

---

## 📄 Licencia

Distribuido bajo Licencia MIT. Ver `LICENSE` para más información.

---

## 👨‍💻 Autor

Creado con ❤️ por [Tu Nombre](https://github.com/tuusuario)

**NovaMarket** - _Tu tienda del futuro, hoy_ 🚀

---

<div align="center">

### ⭐ Si te gustó este proyecto, dejá una estrella en GitHub

[⬆ Volver arriba](#-novamarket)

</div>
