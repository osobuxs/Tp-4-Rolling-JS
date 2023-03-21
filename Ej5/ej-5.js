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
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacionDiv = document.getElementById("generacion");
    let generacion = "";
    let rasgoCaracteristico = "";

    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgoCaracteristico = "Irreverencia";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y";
      rasgoCaracteristico = "Frustración";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgoCaracteristico = "Obsesión por el éxito";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Generación Baby Boom";
      rasgoCaracteristico = "Ambición";
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Generación Silent";
      rasgoCaracteristico = "Austeridad";
    } else {
      generacion = "No se pudo determinar la generación";
    }

    generacionDiv.textContent = `${this.nombre} pertenece a la ${generacion}, cuyo rasgo característico es la ${rasgoCaracteristico}.`;
  }
}

let persona = new Persona("Juan", 35, "12345678A", "H", 75, 1.8, 1985);
let persona2 = new Persona("Evelin", 25, "12345678A", "H", 55, 1.6, 1998);

function mostrarGeneracion() {
  persona.mostrarGeneracion();
}
