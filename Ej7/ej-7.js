// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  aniadirContacto(contacto) {
    if (this.contactos.length >= this.tamano) {
      console.log("La agenda está llena. No se puede añadir más contactos.");
      return;
    }

    if (this.existeContacto(contacto)) {
      console.log(`El contacto "${contacto.nombre}" ya existe en la agenda.`);
      return;
    }

    this.contactos.push(contacto);
    console.log(
      `El contacto "${contacto.nombre}" ha sido añadido a la agenda.`
    );
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      console.log("La agenda está vacía.");
      return;
    }

    console.log("Lista de contactos:");
    this.contactos.forEach((c) => console.log(`- ${c.nombre}: ${c.telefono}`));
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);

    if (contacto) {
      console.log(
        `El teléfono del contacto "${contacto.nombre}" es: ${contacto.telefono}`
      );
    } else {
      console.log(`El contacto "${nombre}" no existe en la agenda.`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.nombre === contacto.nombre);

    if (index === -1) {
      console.log(`El contacto "${contacto.nombre}" no existe en la agenda.`);
      return;
    }

    this.contactos.splice(index, 1);
    console.log(
      `El contacto "${contacto.nombre}" ha sido eliminado de la agenda.`
    );
  }

  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}
let agenda = new Agenda();

while (true) {
  let opcion = prompt(
    "Elige una opción:\n1. Añadir contacto\n2. Buscar contacto\n3. Eliminar contacto\n4. Listar contactos\n5. Agenda llena\n6. Huecos libres\n7. Salir"
  );

  switch (opcion) {
    case "1":
      let nombre = prompt("Introduce el nombre del contacto:");
      let telefono = prompt("Introduce el teléfono del contacto:");
      let contacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(contacto);
      break;
    case "2":
      let nombreBuscar = prompt(
        "Introduce el nombre del contacto que quieres buscar:"
      );
      agenda.buscarContacto(nombreBuscar);
      break;
    case "3":
      let nombreEliminar = prompt(
        "Introduce el nombre del contacto que quieres eliminar:"
      );
      let contactoEliminar = new Contacto(nombreEliminar, "");
      agenda.eliminarContacto(contactoEliminar);
      break;
    case "4":
      agenda.listarContactos();
      break;
    case "5":
      console.log(`La agenda está llena: ${agenda.agendaLlena()}`);
      break;
    case "6":
      console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
      break;
    case "7":
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción no válida. Introduce un número del 1 al 7.");
      break;
  }
}
