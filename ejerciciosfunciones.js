//Actv. Felipe Funciones
// area del triangulo
function triangulo () {
    var  base = 5;
    var altura = 10;
    var area = (base * altura)/2
    alert("El area del triangulo es: " + area)
}

triangulo();

/*circulo 
para pi es Math.PI
*/
function circulo (diametro, area){
    var diametro = 4;
    var area = (3.1416)*(diametro*diametro);
    alert ("El area del circulo es: " + area);
}
circulo();

//rectangulo
function rectangulo (base, altura, area) {
    var area = base * altura 
    alert("El area del rectangulo es: " + area);
}
rectangulo(5, 8);
