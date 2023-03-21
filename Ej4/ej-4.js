// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(
      `Código: ${this.codigo}\nNombre: ${this.nombre}\nPrecio: ${this.precio}`
    );
  }
}

let productos = [];

productos.push(new Producto(1, "Producto 1", 100));
productos.push(new Producto(2, "Producto 2", 200));
productos.push(new Producto(3, "Producto 3", 300));

function imprimeDatos() {
  let productosDiv = document.getElementById("productos");
  productosDiv.textContent = "";
  for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
    let productoP = document.createElement("p");
    productoP.textContent = `Código: ${productos[i].codigo}, Nombre: ${productos[i].nombre}, Precio: ${productos[i].precio}`;
    productosDiv.appendChild(productoP);
  }
}
