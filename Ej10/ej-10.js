// crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    for (let avion of this.listaAviones) {
      if (avion.nombre === nombreAvion) {
        return avion;
      }
    }
    return null;
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length >= this.capacidad) {
      console.log(`El avión ${this.nombre} está lleno, no se puede abordar.`);
    } else {
      this.listaPasajeros.push(pasajero);
      console.log(
        `El pasajero ${pasajero} ha abordado el avión ${this.nombre}.`
      );
    }
  }
}

const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Vuelo 001", 100, "Nueva York");
const avion2 = new Avion("Vuelo 002", 50, "París");
const avion3 = new Avion("Vuelo 003", 80, "Tokio");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

const avionBuscado = aeropuerto.buscarAvion("Vuelo 002");
if (avionBuscado) {
  avionBuscado.abordar("Juan Pérez");
} else {
  console.log("No se encontró el avión.");
}
