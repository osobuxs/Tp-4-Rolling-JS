// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// Generacion Z: año de nacimiento desde 1994 a 2010 y su rasgo caracteristico es la irreverencia
// Generacion Y: año de nacimiento desde 1981 a 1993 y su rasgo caracteristico es la Frustacion
// Generacion X: año de nacimiento desde 1969 a 1980 y su rasgo caracteristico es la Obsecion por el exito
// Generacion Baby Boom: año de nacimiento desde 1949 a 1968 y su rasgo caracteristico es la Ambicion
// Generacion Silent: año de nacimiento desde 1930 a 1948 y su rasgo caracteristico es la Austeridad

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.DNI = this.generaDNI();
  }

  mostrarGeneracion() {
    let generacion;
    let rasgoCaracteristico;

    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgoCaracteristico = "irreverencia";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y";
      rasgoCaracteristico = "frustración";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgoCaracteristico = "obsesión por el éxito";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Generación Baby Boom";
      rasgoCaracteristico = "ambición";
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Generación Silent";
      rasgoCaracteristico = "austeridad";
    }

    console.log(
      `La persona de nombre ${this.nombre} pertenece a la ${generacion} y su rasgo característico es la ${rasgoCaracteristico}.`
    );
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} no es mayor de edad.`);
    }
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de nacimiento: ${this.anioNacimiento}`);
    console.log(`DNI: ${this.DNI}`);
  }

  generaDNI() {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
  }
}

const persona1 = new Persona("Juan", 35, "H", 70, 1.75, 1988);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();

const persona2 = new Persona("Ana", 15, "M", 50, 1.6, 2008);
persona2.mostrarGeneracion();
persona2.esMayorDeEdad();
persona2.mostrarDatos();
