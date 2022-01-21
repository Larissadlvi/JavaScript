/* 
Exercise #1: A Person Object
Part 1 Javascript
Create a class called Person which accepts the name of a person as a string, and his/her/their age as a number.

The Person class should have a method called Describe which returns a string with the following syntax: "name, age years old".

For example, if Manny is 19 years old the function Describe of his object will return "Manny, 19 years old".*/

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get Describe(){
        return this.nombre + ", " + this.edad + " years old";
    }
}

/*Part 2 HTML
Create an HTML page that has 2 input boxes: one for name and another for age. When someone enters a name and age, the page will show a list of "{Name}, {x} years old".
*/


function añadir(){

    x = document.getElementById("entrada").value;
    y = document.getElementById("edad").value;

    let individuo = new Persona(x,y);
    
    var x = document.createElement("LI");
    var t = document.createTextNode(individuo.Describe);
    x.appendChild(t);
    document.querySelector("#container ol").appendChild(x);

    document.getElementById("entrada").value=""; //para borrar lo del cuadro input
    document.getElementById("edad").value="";
}





