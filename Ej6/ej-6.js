// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  // Métodos get y set
  get ISBN() {
    return this._ISBN;
  }

  set ISBN(value) {
    this._ISBN = value;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(value) {
    this._titulo = value;
  }

  get autor() {
    return this._autor;
  }

  set autor(value) {
    this._autor = value;
  }

  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(value) {
    this._numPaginas = value;
  }

  // Método para mostrar información del libro
  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`
    );
  }
}

// Crear dos objetos libros
const libro1 = new Libro(
  "1234567890",
  "El Quijote",
  "Miguel de Cervantes",
  863
);
const libro2 = new Libro(
  "0987654321",
  "Cien años de soledad",
  "Gabriel García Márquez",
  471
);

// Utilizar el método mostrarLibro() para mostrar información de los libros
libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar cuál de los libros tiene más páginas
if (libro1.numPaginas > libro2.numPaginas) {
  console.log(
    `El libro ${libro1.titulo} tiene más páginas que el libro ${libro2.titulo}.`
  );
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log(
    `El libro ${libro2.titulo} tiene más páginas que el libro ${libro1.titulo}.`
  );
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
}
