# Noah Iluminación
> Proyecto de e-commerce desarrollado para el curso de ReactJS de CoderHouse.

## Demo
Para visualizar una demo funcional, hacer click [aquí](https://635b2c8817ddc8121aa8b2c4--dashing-bunny-0589e5.netlify.app/).

## Incluye
> Listado de productos y detalle de cada uno. Posibilidad de agregar productos al carrito, indicando la cantidad deseada (nunca pudiendo superar el stock disponible). Manejo de carrito: muestra de productos elegidos, posibilidad de eliminación de items, y total acumulado. Posibilidad de "Finalizar la compra" (ingreso de datos validados, y checkout final con ID de orden generada en Firebase). Pantallas de error ante categorías vacías o productos inexistentes. Loaders de carga de productos, detalle de los mismos, y generación de orden de compra. Mensajes antes productos o categorías inexistentes o vacías.

## Extras
> Carga dinámica de categorías mostradas en la barra de navegación (desde Firebase). Manejo de stock luego de realizada una orden de compra (se resta de cada producto).

## Módulos utilizados

- [ReactJS](https://es.reactjs.org/): V18.2.0.
- [React Bootstrap](https://react-bootstrap.github.io/): V2.5.0 (que utiliza a su vez Bootstrap V5.2.1). Librería para manejar estilos. Para instalar, correr el comando "npm install react-bootstrap bootstrap". Algunos componentes utilizados fueron: "Form", "Modal", "NavBar", "Spinner", "Card", "Button", "Badge" y "Table".
- [React Icons](https://www.npmjs.com/package/react-icons): V4.4.0. Librería para importar íconos de forma individual y sencilla. Para instalar, correr el comando "npm install react-icons".
- [React Router DOM](https://reactrouter.com/en/main): V6.4.1. Librería para manejar la navegación del sitio. Para instalar, correr el comando "npm install react-router-dom".
