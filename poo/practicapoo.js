/* 
Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:  
Artículo: representa el producto que se está comprando y tiene los siguientes 
atributos: nombre descripción precio cantidad fotografía URL Venta: representa una instancia de venta y tiene los siguientes atributos artículos (lista de artículos) total ID del cliente correo electrónico del cliente  
Implementen los objetos Artículo y Venta usando JavaScript.
*/

let artículo = {
    nombre: "Calcetines",
    descripción: "Para el frío",
    precio: 180,
    cantidad: 1,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9HQQXnhQHStazg_OFNPWLprOooHi_ibP3BJfte0caaAhwLRQdqnSzrFcCQ0sqdXgvXM&usqp=CAU",
}

let venta ={
    artículos : ["calcetines", "Chamarra", "Pantalón"],
    total : 800,
    idCliente : "001",
    email: "ejemplo@correo.com",
}


console.log("Adquirió " +" " +artículo.nombre + " con el precio de " + " " +artículo.precio);
console.log("El cliente con el id: "+ " "+ venta.idCliente + " consumió un total de " + venta.total);

