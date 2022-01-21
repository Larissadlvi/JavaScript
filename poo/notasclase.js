/*const arreglo = ["Larissa", "De La Vega", 25];

console.log(arreglo);

let objeto = {
    nombre: "Larissa",
    apellido: "De La Vega",
    edad: 25
}

console.log(objeto.nombre);*/

//Objeto con función
/*const arreglo = ["Larissa", "De La Vega", 25];

//console.log(arreglo);

let objeto = {
    nombre: "Larissa",
    apellido: {
        paterno: "De La Vega",
        materno: "Iñiguez"},
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido.materno;
    }
}

console.log(objeto.nombreCompleto());*/

//acceder a metodos de objeto
/*let objeto = {
    nombre: "Larissa",
    apellido: {
        paterno: "De La Vega",
        materno: "Iñiguez"},
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido.paterno;
    }
}

document.getElementById("boquita").innerHTML = objeto.nombreCompleto();*/

//Declaracion de clases
/*
class Rectangle {
    constructor (height, width){
        this.height = height;
        this.width = width; 
    }

//Getter, tiene el método calcarea

get area () {
    return this.calcArea();
}

//Method

calcArea (){
    return this.height*this.width;
}
}

const square =new Rectangle (10,10);
const rectangulo = new Rectangle(20,30);

console.log(square.area);
console.log(rectangulo.area);
*/
/*
class persona {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

const persona1 = new persona("Larissa", 1996);
const persona2 = new persona("Angeles", 2000);

console.log(persona1);
console.log(persona2);

document.getElementById("Id").innerHTML=persona1.name;
*/

//Clase herencia, extends y super

class padre {
    constructor(apellido){
        this.apellidoPadre = apellido;
    }
}

class hijo extends padre {
    constructor(nombre, apellido){
        super(apellido)
        this.nombreHijo = nombre; 
    }


registro(){
    return "El  nombre del hijo será " + this.nombreHijo +" "+ this.apellidoPadre;
}
}

let Hijo1 = new hijo ("Mario","Valdes");
let Hijo2 = new hijo ("Fernanda","Valdes");

document.getElementById("Id").innerHTML=Hijo1.registro();
document.getElementById("Id2").innerHTML=Hijo2.registro();