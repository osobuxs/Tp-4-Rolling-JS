// Con el siguiente array de objetos
// crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

// Mostrar la tabla completa

// filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

// Buscar un producto serum y mostrarlo por pantalla,

// Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];
function dibujarTabla(productos) {
  const tabla = document
    .getElementById("tabla-productos")
    .getElementsByTagName("tbody")[0];

  productos.forEach((producto) => {
    const fila = tabla.insertRow();
    const celdaProducto = fila.insertCell();
    const celdaCategoria = fila.insertCell();
    const celdaPrecio = fila.insertCell();
    celdaProducto.textContent = producto.nombreProducto;
    celdaCategoria.textContent = producto.categoria;
    celdaPrecio.textContent = `$${producto.precio.toFixed(2)}`;
  });
}

dibujarTabla(listaProductos);

//Productos por 'Protectores Solares'
const productosFiltrados = listaProductos.filter(
  (producto) => producto.categoria === "Protector solar"
);
dibujarTabla(productosFiltrados);
console.log(productosFiltrados);

//Producto Serum
const productoEncontrado = listaProductos.find((producto) =>
  producto.nombreProducto.toLowerCase().includes("sérum")
);
if (productoEncontrado) {
  console.log(productoEncontrado);
} else {
  console.log("Producto no encontrado");
}

const productoEncontrado2 = listaProductos.find((producto) =>
  producto.nombreProducto.toLowerCase().includes("bruma")
);
if (productoEncontrado2) {
  console.log(productoEncontrado2);
} else {
  console.log("El producto 'Bruma' no existe en el arreglo de productos");
}
