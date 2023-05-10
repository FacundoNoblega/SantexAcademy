//ejercicio 1
let n = 6; // n es el número por el cual se va a generar la piramide.
for (let i = 1; i <= n; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += j;
  }
  console.log(fila);
}

//ejercicio 2
let arr1 = ['rojo', 'azul', 'amarillo'];
let arr2 = ['blanco', 'negro', 'rojo'];

let resultado = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      resultado.push(arr1[i]);
    }
  }
}

console.log(resultado);


 //ejercicio 3.2
class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
    agregarProducto(nombre, precio, unidades) {
      // Buscamos el producto en el array de productos del carrito
      const index = this.productos.findIndex(producto => producto.nombre === nombre);
      if (index === -1) {
        this.productos.push({ nombre, precio, unidades });
      }
      // Si el producto ya está en el carrito, actualizamos las unidades y mostramos un mensaje de error
      else {
        this.productos[index].unidades += unidades;
        console.log(`Ya existe ${nombre} con ${this.productos[index].unidades} unidades.`);
      }
      this.montoTotal += precio * unidades;
    }
  }
  
  // Creamos un nuevo carrito
  const carrito = new Carrito();
  
  // Agregamos algunos productos al carrito
  carrito.agregarProducto("Leche", 2, 1); // agrega un producto nuevo
  carrito.agregarProducto("Azucar", 5, 2); // agrega un producto nuevo
  carrito.agregarProducto("Leche", 2, 2); // actualiza las unidades del producto existente
  carrito.agregarProducto("Pan", 3, 3); // agrega un producto nuevo

  console.log(carrito);
  
