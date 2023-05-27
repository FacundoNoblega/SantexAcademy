// Cada producto que vende el super es creado con esta clase
class Producto {
    constructor(sku, nombre, precio, categoria, stock = 10) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

// Creo todos los productos que vende mi super
const productosDelSuper = [
    new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4),
    new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas'),
    new Producto('PV332MJ', 'Cerveza', 20, 'bebidas'),
    new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20),
    new Producto('UI999TY', 'Fideos', 5, 'alimentos'),
    new Producto('RT324GD', 'Lavandina', 9, 'limpieza'),
    new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50),
    new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3)
];

// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.categorias = [];
        this.precioTotal = 0;
    }

    agregarProducto(sku, cantidad) {
        const producto = productosDelSuper.find((p) => p.sku === sku);

        if (!producto) {
            console.log(`Error: Producto ${sku} no encontrado.`);
            return;
        }

        let productoExistente = this.productos.find((p) => p.sku === sku);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            productoExistente = new ProductoEnCarrito(sku, producto.nombre, cantidad);
            this.productos.push(productoExistente);
            this.categorias.push(producto.categoria);
        }

        this.precioTotal += producto.precio * cantidad;
    }

    eliminarProducto(sku, cantidad) {
        return new Promise((resolve, reject) => {
            const productoExistente = this.productos.find((p) => p.sku === sku);

            if (!productoExistente) {
                reject(`Error: El producto ${sku} no existe en el carrito.`);
                return;
            }

            if (cantidad < productoExistente.cantidad) {
                productoExistente.cantidad -= cantidad;
            } else {
                const index = this.productos.indexOf(productoExistente);
                this.productos.splice(index, 1);
            }

            const producto = productosDelSuper.find((p) => p.sku === sku);

            if (!producto) {
                reject(`Error: Producto ${sku} no encontrado.`);
                return;
            }

            this.precioTotal -= producto.precio * cantidad;
            resolve();
        });
    }
}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

const carrito = new Carrito();

carrito.agregarProducto('WE328NJ', 2);
carrito.agregarProducto('WE328NJ', 3);

carrito.eliminarProducto('WE328NJ', 1)
    
    .then(() => {
    console.log("Producto eliminado del carrito.");
    console.log("Carrito:", carrito);
})
.catch((error) => {
    console.error(error);
    console.log("No se pudo eliminar el producto del carrito.");
});
