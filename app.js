/*var lenght = 16; //numero
var lastName = "Johnson"; //string
var x = {firstName: "John", lastName:"Doe"} //objeto por el firstname y lastname

console.log("El tipo de dato de 16 es: " + typeof(length));

console.log("El tipo de dato de Johnson es: " + typeof(lastName));

console.log("El tipo de dato de John Doe es: " + typeof(x));

console.log("La marca de x es: " +x.firstName); //llamar a uno especifico del objeto */

var length = 16;

var lastName = "Johnson";

var computadora = {marca:"asus", procesador:"i9", memoria:"16 Gb", grafica:"GTX2060", nucleos:8};

console.log("El tipo de dato de 16 es: "+typeof(length));

console.log("El tipo de dato de Johnson es: "+typeof(lastName));

console.log("El tipo de dato de computadora es: "+typeof(computadora));

console.log("La marca de la computadora es:"+computadora.grafica);

console.log("El número de núcleos de la computadora es de tipo:"+typeof(computadora.nucleos));


var x =  3 + 4 + "volvo" + 2 + 3;
// el 2 y 3 despues del volvo los toma como cadena, justo porr el volvo pero si pongo ( 2+ 3) si lo lleva a cabo como numero le da prioridad por parentesis
var y = "volvo" + (3 + 4);
// js entiende que es cadena, por que lo primero que obtiene es una cadena, por lo que el 3 y el 4 los toma como cadena

console.log (x);
console.log(y);

/*ejercicio con Guillermo*/