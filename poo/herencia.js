//Clase herencia, extends y super

var apellido = prompt("Introduce el apellido del padre: ");
var nombre1 = prompt("Introduce el nombre del primer hijo: ");
var nombre2 = prompt("Introduce el nombre del segundo hijo: ");

class padre {
constructor(apellido) {
    this.apellidoPadre = apellido;
}
}

// var padre = {

//   apellidoPadre:"parámetro del constructor"

// }

class hijo extends padre {
constructor(nombre, apellido) {
    super(apellido);
    this.nombreHijo = nombre;
    }

    registro() {
    return (
    "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre
    );
    }
}

//Para comentar todo Ctrl + k + c
