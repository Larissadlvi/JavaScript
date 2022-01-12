/*var lenght = 16; //numero
var lastName = "Johnson"; //string
var x = {firstName: "John", lastName:"Doe"} //objeto por el firstname y lastname

console.log("El tipo de dato de 16 es: " + typeof(length));

console.log("El tipo de dato de Johnson es: " + typeof(lastName));

console.log("El tipo de dato de John Doe es: " + typeof(x));

console.log("La marca de x es: " +x.firstName); //llamar a uno especifico del objeto */

/*var length = 16;

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
console.log(y); */

/*ejercicio con Guillermo 10/Enero/22*/

//Los decimales sí los enseña, a menos de que sea .00 no

/*var auto = {marca:"ford", cilindros:8, transimisión:"automática", tapiz: {
    color:"beige",
    textura:"fibrosa",
    materiales:"sintético",
} 
};

console.log(auto.tapiz.color); */


//P convertir el numero a string, metodo global String()
/*var x = 34;*/
//conversion con nueva variable

/*var y= String(234+123);
console.log(typeof(y));*/

//Método numerico toString()
/*var x = 34;
//x.toString();
console.log(typeof(x.toString())); //aqui se usa el método y se convierte la variable a string sin el (x.toString()) no pasa

var y = (234+123).toString();
console.log(typeof(y)); //se puede usar el metodo en el console o cuando se asigna el valor a y, si quito el typeof hace la operacion y arroja ese resultado como la suma pero en cadena, no como numero

var y = (234+123).toString();
var z = (y+3);
console.log(z); */

//Metodo exponencial, toma los decimales que necesite, los deja en anotacion exponencial y redondea
/*var x = 3.542545478576543124656
var y = x.toExponential(3);
console.log(y);*/

//Metodo toFixed
/*var x = 3.234565645464687543515435154654
var y = x.toFixed(3);
console.log(y);*/

//toPrecision() REgresa un string, con un numero escrito con longitud especificada
/*var x = 13.234565645464687543515435154654
var y = x.toPrecision(4);
console.log(y);*/

//metodo valueof
/*var x =123;
var y = x.valueOf();
console.log(y);*/

//otro metodo valueof, y me regresa a numero
/*
var y=(123).valueOf();
console.log(typeof(y));

//otro metodo valueof
var y = (100+23).valueOf();
console.log(typeof(y)); */

//Método number
/*var x = "10.33"
var y = Number(x); //aqui convierto a number
console.log(typeof(y));
console.log(x); */

//Metodo number diferente
/*var x = "10,33"
var y = Number(x);
console.log(y);
console.log(typeof(y));*/

//
/*
var x = "John";
console.log(x);
console.log(typeof(x));

var y =Number(x);

console.log(y);
console.log(typeof(y)); */

/*var x = "10";

console.log(x);
console.log(typeof(x));

var y = parseInt(x);

console.log(y);
console.log(typeof(y))*/

//max value

/*
var x = Number.MAX_VALUE;

console.log(x);
console.log(typeof(x)); */

//unario
/*
var x = "5";

console.log(x);
console.log(typeof(x));

var y = +x; //esto que esta en x sumalo a y, como numero
console.log(y);
console.log(typeof(y));

var x ="Susana";

console.log(x);
console.log(typeof(x));

var y = +x;
console.log(y);
console.log(typeof(y)); */

//Null ausencia intencional

var resultado = "5" + null;
console.log(resultado);
console.log(typeof(resultado));








