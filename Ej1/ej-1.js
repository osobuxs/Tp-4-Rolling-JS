// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Definir el objeto auto
let auto = {
  color: "Verde",
  marca: "Citroen",
  modelo: "C-Elysee",
  encendido: false,

  // Método para encender el auto
  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      console.log("El auto está encendido");
    } else {
      console.log("El auto ya está encendido");
    }
  },

  // Método para apagar el auto
  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("El auto está apagado");
    } else {
      console.log("El auto ya está apagado");
    }
  },
};

// Prueba de los métodos
console.log(auto.color); // rojo
auto.encender(); // El auto está encendido
auto.encender(); // El auto ya está encendido
auto.apagar(); // El auto está apagado
auto.apagar(); // El auto ya está apagado
