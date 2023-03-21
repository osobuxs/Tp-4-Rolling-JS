// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Crear objeto cuenta
let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
  },
  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      console.log("No se puede extraer más dinero del que hay en la cuenta");
    }
  },
  informar: function () {
    console.log(`Titular: ${this.titular}\nSaldo: ${this.saldo}`);
  },
};

// Funciones para interactuar con el objeto cuenta desde el HTML
function ingresarDinero() {
  let cantidad = parseInt(document.getElementById("ingresar").value);
  cuenta.ingresar(cantidad);
  informar();
}

function extraerDinero() {
  let cantidad = parseInt(document.getElementById("extraer").value);
  cuenta.extraer(cantidad);
  informar();
}

function informar() {
  let descripcion = document.getElementById("descripcion");
  descripcion.textContent = `Titular: ${cuenta.titular}\nSaldo: ${cuenta.saldo}`;
}
