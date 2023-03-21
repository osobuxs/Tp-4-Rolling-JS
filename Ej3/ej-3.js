// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarPropiedades(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  mostrarPropiedades() {
    console.log(`Alto: ${this.alto}\nAncho: ${this.ancho}`);
  }

  calcularPerimetro() {
    let perimetro = 2 * (this.alto + this.ancho);
    console.log(`Perímetro: ${perimetro}`);
  }

  calcularArea() {
    let area = this.alto * this.ancho;
    console.log(`Área: ${area}`);
  }
}

let rectangulo;

function crearRectangulo() {
  let alto = parseInt(document.getElementById("alto").value);
  let ancho = parseInt(document.getElementById("ancho").value);
  rectangulo = new Rectangulo(alto, ancho);
  mostrarPropiedades();
}

function mostrarPropiedades() {
  rectangulo.mostrarPropiedades();
  let descripcion = document.getElementById("descripcion");
  descripcion.textContent = `Alto: ${rectangulo.alto}, Ancho: ${rectangulo.ancho}`;
}

function calcularPerimetro() {
  rectangulo.calcularPerimetro();
}

function calcularArea() {
  rectangulo.calcularArea();
}
