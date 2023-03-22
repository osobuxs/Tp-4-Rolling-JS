// Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log(`Este animal emite un sonido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    console.log(`El perro ${this.nombre} está ladrando.`);
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    console.log(`El gato ${this.nombre} está maullando.`);
  }
}

const perro1 = new Perro("Verdugo", 3);
const gato1 = new Gato("Michifu", 2);

perro1.emitirSonido(); // El perro Verdugo está ladrando.
gato1.emitirSonido(); // El gato Michifu está maullando.
