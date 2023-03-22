// Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre} y tengo ${this.edad} años. Soy ${this.profesion}.`
    );
  }

  despedirse() {
    console.log(`Adiós, hasta pronto!`);
  }
}

const persona1 = new Persona("Juan", 30, "programador");
const persona2 = new Persona("Ana", 25, "diseñadora");

persona1.saludar(); // Hola, soy Juan y tengo 30 años. Soy programador.
persona1.despedirse(); // Adiós, hasta pronto!
persona2.saludar(); // Hola, soy Ana y tengo 25 años. Soy diseñadora.
persona2.despedirse(); // Adiós, hasta pronto!
