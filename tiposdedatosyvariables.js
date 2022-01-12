var x1 = false;
var numero= Number(x1);
var cadena= String(x1);
var booleano= Boolean(x1);


console.log("El valor de " + x1 + " en number es " + numero );


console.log("El valor de " + x1 + " en string es " + cadena);


console.log("El valor de " + x1 + " en boolean es " + booleano);

var x2 = true;
var numero= Number(x2);
var cadena= String(x2);
var booleano= Boolean(x2);


console.log("El valor de " + x2 + " en number es " + numero );


console.log("El valor de " + x2 + " en string es " + cadena);


console.log("El valor de " + x2 + " en boolean es " + booleano);

var x3 = 0;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = 1;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = "0";
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = "000";
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = "1";
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = NaN;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = Infinity;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = -Infinity;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = "";
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = "20";
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = "Twenty";
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = null;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );


console.log("El valor de " + x3 + " en string es " + cadena);


console.log("El valor de " + x3 + " en boolean es " + booleano);

var x3 = undefined;
var numero= Number(x3);
var cadena= String(x3);
var booleano= Boolean(x3);


console.log("El valor de " + x3 + " en number es " + numero );
console.log("El valor de " + x3 + " en string es " + cadena);
console.log("El valor de " + x3 + " en boolean es " + booleano);

//Ejercicio 1: Create a Calculator
var cumple = parseInt(prompt("Cual es tu año de nacimiento?"));

var cumpleMes = parseInt(prompt("Cual es tu mes de nacimiento? (Del 1 al 12)"));

var futuro = parseInt(prompt("Cual es tu año en el que quieres conocer tu edad?"));

var futuroMes = parseInt(prompt("Cual es tu mes del año en el que quieres conocer tu edad?"));

var resultado = futuro-cumple;

if(futuroMes<=cumpleMes){
console.log("Tu edad en el año " + futuro + " sera de " + (resultado - 1));
}
else{
    console.log("Tu edad en el año " + futuro + " sera de " + resultado) ;
}



//Ejercicio 2:Create an information card
var persona = {name : prompt("Cual es tu nombre?"), locacion : prompt("Cual es tu ubicacion?") , hobby : prompt("Cual es tu hobby?")};

// var name = prompt("Cual es tu nombre?");
// var locacion = prompt("Cual es tu ubicacion?");
// var hobby = prompt("Cual es tu hobby?");

console.log("Hi my name is " + persona.name + ".I live in " + persona.locacion + " and enjoy " + persona.hobby +".");

