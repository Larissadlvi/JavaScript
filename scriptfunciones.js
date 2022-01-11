//Este es un comentario de una linea

/*Este es un comentario 
multilinea*/

//Esta es una alerta
/*
alert ("Estoy vivo!!!!");

console.log("Este es un mensaje para la consola");

var nombre = "Larissa";
var apellidos = "De La Vega Iñiguez";
var edad = 25;

console.log(nombre,apellidos,edad);

alert("Mi nombre es " + nombre);
console.log("Mis apellidos son: " + apellidos);

alert("Mi nombre es: " + nombre + ", mis apellidos son: " + apellidos + " y mi edad es: " + edad);

// otro ejemplo de como mostrar variables en consola

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 + numero2;

console.log("El resultado de la suma es: " + resultado);

//sintaxis básica de una función

function nombrefuncion (parametros); {
    instrucciones; 
}
*/


/*
//Declaración de funcion

function Saludar(){
    alert ("Hola a todos");
}

Saludar();

//Expresión de función

var Cantar = function(){
    alert ("A mi me gusta cantar");
}

Cantar();

//funcion sin parametros
function sumar () {
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert ("La suma de la funcion sin parámetros es: " + suma);
}

sumar();

//funcion con parametros
function restar (num1,num2,resta) {
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert ("La resta de la funcion con parametros es: " + resta);
}

restar();

//otra funcion con parametros

function Cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert ("El cuadrado del numero es: " + rescuadrado);
}

Cuadrado(4);

function Operaciones (num1, num2, num3, suma, resta, multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;
    
    alert("La suma es: " + suma + ", la resta es: " + resta + " y la multiplicacion es: " + multi);
}

Operaciones(5,6,7);
*/

//funcion prompter o prompt
/*documentacion
function Prompter(){
    var respuesta = prompt("Buenos días, cuál es tu nombre?");
    alert("Es un gusto saludarte " + respuesta);
}

Prompter();

function AreaCuadrado(){
    var datoingresado = prompt ("Ingresa un número");
    var resultado = datoingresado * datoingresado;
    alert("El area del cuadrado es " + resultado + " por que el numero que ingresaste es " + datoingresado);
}

AreaCuadrado();
*/

//ejemplo: podria ser para descargar el CV
function confirmacion(){
    var pregunta = confirm("Deseas visitar google.com y buscar fotos de perritos?");
    if (pregunta) {
        alert("Te enviare rápidamente")
        window.location = "https:www.google.com";
    }
    else {
        alert ("No hay problema, nos vemos luego")
    }
}


//getElementByid
function cambiarcolor (nuevocolor) {
    var elem = document.getElementById("parrafo");
    elem.style.color = nuevocolor;
}

//
function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else elem.style.display = '';
}

//Actv. Felipe Funciones